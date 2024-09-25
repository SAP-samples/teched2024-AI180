/* eslint-disable no-console */
import express from 'express';
import {
  chatCompletion,
  computeEmbedding
} from './foundation-models-azure-openai.js';
import { orchestrationCompletion } from './orchestration.js';

import 'dotenv/config.js';
console.log(process.env.AICORE_SERVICE_KEY);

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

app.get('/llm', async (req, res) => {
  try {
    res.send(await chatCompletion());
  } catch (error: any) {
    console.error(error);
    res
        .status(500)
        .send('Yikes, vibes are off apparently 😬 -> ' + error.message);
  }
});

app.get('/embedding', async (req, res) => {
  try {
    const result = await computeEmbedding();
    if (!result.length) {
      res.status(500).send('No embedding vector returned.');
    } else {
      res.send('Number crunching success, got a nice vector.');
    }
  } catch (error: any) {
    console.error(error);
    res
        .status(500)
        .send('Yikes, vibes are off apparently 😬 -> ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
