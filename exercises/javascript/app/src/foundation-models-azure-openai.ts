import {
  AzureOpenAiChatClient,
  AzureOpenAiEmbeddingClient
} from '@sap-ai-sdk/foundation-models';
import { replaceLineBreakWithBR } from './util.js';

export async function chatCompletion(): Promise<string> {
  const response = await new AzureOpenAiChatClient('gpt-4o').run({
    messages: [
      { role: 'system', content: 'Answer in German please.' },
      {
        role: 'user',
        content:
          'List a football team, made by 11 best legend players with national flags emoji.'
      }
    ],
    temperature: 0.1
  });

  return replaceLineBreakWithBR(response.getContent()!);
}

export async function computeEmbedding(): Promise<number[] | undefined> {
  const response = await new AzureOpenAiEmbeddingClient(
    'text-embedding-ada-002'
  ).run({
    input: 'Hello, world!'
  });

  return response.getEmbedding();
}
