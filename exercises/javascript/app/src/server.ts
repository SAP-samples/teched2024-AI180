/* eslint-disable no-console */
import express from 'express';
import {
  OrchestrationClient
} from '@sap-ai-sdk/orchestration';
import { orchestrationCompletion } from './orchestration.js';
import 'dotenv/config.js';
console.log(`Service key: ${process.env.AICORE_SERVICE_KEY}`);

const app = express();
const port = 8080;

app.get(['/', '/health'], (req, res) => {
  res.send('Hello World! 🌍');
});

app.get('/orchestration/:sampleCase', async (req, res) => {
  try {
    res.send(await orchestrationCompletion(req.params.sampleCase));
  } catch (error: any) {
    console.error(error);
    res
      .status(500)
      .send('Yikes, vibes are off apparently 😬 -> ' + error.message);
  }
});


app.get('/orchestration-stream', async (req, res) => {
  try {
    const controller = new AbortController();
    const orchestrationClient = new OrchestrationClient({
      // define the language model to be used
      llm: {
        model_name: 'gpt-35-turbo',
        model_params: {}
      },
      // define the prompt
      templating: {
        template: [
          {
            role: 'user',
            content: 'Give me a long introduction of {{?input}}'
          }
        ]
      }
    });

    const response = await orchestrationClient.stream(
      { inputParams: { input: 'SAP Cloud SDK' } },
      controller,
      {
        "global": {
          "chunk_size": 10
        }
      }
    );

    // Set headers for event stream.
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let connectionAlive = true;

    // Abort the stream if the client connection is closed.
    res.on('close', () => {
      controller.abort();
      connectionAlive = false;
      res.end();
    });

    // Stream the delta content.
    for await (const chunk of response.stream) {
      if (!connectionAlive) {
        break;
      }
      res.write(chunk.getDeltaContent() + '\n');
    }

    // Write the finish reason and token usage after the stream ends.
    if (connectionAlive) {
      const finishReason = response.getFinishReason();
      const tokenUsage = response.getTokenUsage();
      res.write('\n\n---------------------------\n');
      res.write(`Finish reason: ${finishReason}\n`);
      res.write('Token usage:\n');
      res.write(`  - Completion tokens: ${tokenUsage?.completion_tokens}\n`);
      res.write(`  - Prompt tokens: ${tokenUsage?.prompt_tokens}\n`);
      res.write(`  - Total tokens: ${tokenUsage?.total_tokens}\n`);
    }
  } catch (error: any) {
    console.error(error);
    if (!res.headersSent) {
      res.status(500).send('Error in streaming: ' + error.message);
    }
  } finally {
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
