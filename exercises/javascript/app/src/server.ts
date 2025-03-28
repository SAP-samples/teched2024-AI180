/* eslint-disable no-console */
import express from 'express';
import { generateIndexPage } from './indexPage.js';
import {
  OrchestrationClient
} from '@sap-ai-sdk/orchestration';
import { orchestrationCompletion } from './orchestration.js';
import 'dotenv/config.js';

const app = express();
const port = 8080;

// Root route
app.get(['/', '/health'], (req, res) => {
  res.send(generateIndexPage());
});

// Orchestration Routes
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
      llm: {
        model_name: 'gpt-35-turbo',
        model_params: {}
      },
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
        'global': {
          'chunk_size': 100
        }
      }
    );

    // Set headers for event stream
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    let connectionAlive = true;

    res.on('close', () => {
      controller.abort();
      connectionAlive = false;
      res.end();
    });

    // Stream the response
    for await (const chunk of response.stream) {
      if (!connectionAlive) break;
      res.write(chunk.getDeltaContent());
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

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
