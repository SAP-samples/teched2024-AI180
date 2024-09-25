import {
  AzureOpenAiChatClient,
  AzureOpenAiEmbeddingClient
} from '@sap-ai-sdk/foundation-models';


export async function chatCompletion(): Promise<string|undefined|null> {
  const response = await new AzureOpenAiChatClient('gpt-35-turbo').run({
    messages: [{ role: 'user', content: 'What is the capital of France?' }],
    max_tokens: 500
  });
  return response.getContent();
}


export async function computeEmbedding(): Promise<number[]|undefined> {
  const response = await new AzureOpenAiEmbeddingClient(
    'text-embedding-ada-002'
  ).run({
    input: 'Hello, world!'
  });

  return response.getEmbedding();
}
