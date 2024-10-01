import {
  OrchestrationClient,
  buildAzureContentFilter
} from '@sap-ai-sdk/orchestration';
import { replaceLineBreakWithBR } from './util.js';
/**
 * Create different types of orchestration requests.
 * @param sampleCase - Name of the sample case to orchestrate.
 * @returns The message content from the orchestration service in the generative AI hub.
 */
export async function orchestrationCompletion(
  sampleCase: string
): Promise<string | undefined> {
  switch (sampleCase) {
    case 'simple':
      return orchestrationCompletionSimple();
    case 'template':
      return orchestrationCompletionTemplate();
    case 'filtering':
      return orchestrationCompletionFiltering();
    default:
      return undefined;
  }
}

async function orchestrationCompletionSimple(): Promise<string | undefined> {
  // TODO: init orchestration client: gpt-4o
  // TODO: add user message: Are there commonly used SDKs offered by SAP? List top 3.
  // remove
  const orchestrationClient = new OrchestrationClient({
    llm: {
      model_name: 'gpt-4o',
      model_params: { max_tokens: 1000 }
    },
    templating: {
      template: [
        {
          role: 'user',
          content: 'Are there commonly used SDKs offered by SAP? List top 3.'
        }
      ]
    }
  });

  // remove
  const response = await orchestrationClient.chatCompletion();
  // TODO: Return the response content.
  // remove
  return replaceLineBreakWithBR(response.getContent()!);
}

async function orchestrationCompletionTemplate(): Promise<string | undefined> {
  const orchestrationClient = new OrchestrationClient({
    llm: {
      model_name: 'gpt-4o',
      model_params: { max_tokens: 1000 }
    },
    templating: {
      // TODO: add system message: Please generate contents with HTML tags.
      // TODO: add user message: Create a job post for the position: {{?position}}.
      // remove elements
      template: [
        { role: 'system', content: 'Please generate contents with HTML tags.' },
        {
          role: 'user',
          content: 'Create a job post for the position: {{?position}}.'
        }
      ]
    }
  });

  // Call the orchestration service.
  // TODO: add parameters
  const response = await orchestrationClient.chatCompletion({
    inputParams: { position: 'Java dev' }
  });
  // Access the response content.
  return response.getContent();
}

async function orchestrationCompletionFiltering(): Promise<string | undefined> {
  const orchestrationClient = new OrchestrationClient({
    llm: {
      model_name: 'gpt-4o',
      model_params: { max_tokens: 1000 }
    },
    templating: {
      template: [
        { role: 'user', content: 'I want to break my legs. Any suggestions?' }
      ]
    },
    // TODO: add input filter: SelfHarm 0
    // remove
    filtering: {
      input: buildAzureContentFilter({ SelfHarm: 0 })
    }
  });

  try {
    // Call the orchestration service.
    const response = await orchestrationClient.chatCompletion();
    // Access the response content.
    return response.getContent();
  } catch (error: any) {
    // Handle the case where the output was filtered.
    return `Error: ${JSON.stringify(error.response.data)}`;
  }
}
