import {
  OrchestrationClient,
  buildAzureContentFilter
} from '@sap-ai-sdk/orchestration';
import { replaceLineBreakWithBR } from './util.js';
import { ticket } from "./ticket.js";
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
    case 'masking':
      return orchestrationMasking();
    default:
      return undefined;
  }
}

async function orchestrationCompletionSimple(): Promise<string | undefined> {
  let orchestrationClient: any;
  // Task 1: minimal example
  // TODO: init orchestration client: gpt-4o
  // TODO: add user message:
  //  Are there commonly used SDKs offered by SAP? List top 3, developed under public GitHub.
  // Task 2: harmonized API
  // TODO: switch to a gemini model
  // REMOVE
  orchestrationClient = new OrchestrationClient({
    llm: {
      model_name: 'gpt-4o',
      model_params: { max_tokens: 1000 }
    },
    templating: {
      template: [
        {
          role: 'user',
          content:
            'Are there commonly used SDKs offered by SAP? List top 3, developed under public GitHub.'
        }
      ]
    }
  });

  const response = await orchestrationClient.chatCompletion();
  return replaceLineBreakWithBR(response.getContent()!);
}

async function orchestrationCompletionTemplate(): Promise<string | undefined> {
  const orchestrationClient = new OrchestrationClient({
    llm: {
      model_name: 'gpt-4o',
      model_params: { max_tokens: 1000 }
    },
    templating: {
      template: [
        { role: 'system', content: 'Please generate contents with HTML tags and emojis.' },
        {
          role: 'user',
          content: 'Create a job post for the position: {{?position}}.'
        }
      ]
    }
  });
  const response = await orchestrationClient.chatCompletion({
    inputParams: { position: 'Java dev' }
  });

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
    // Task 3: content filter
    // TODO: add input filter: SelfHarm 0
    // REMOVE
    filtering: {
      input: buildAzureContentFilter({ SelfHarm: 0 })
    }
  });

  try {
    const response = await orchestrationClient.chatCompletion();
    return response.getContent();
  } catch (error: any) {
    return `Error: ${JSON.stringify(error.response.data)}`;
  }
}

async function orchestrationMasking(): Promise<string | undefined> {
  const orchestrationClient = new OrchestrationClient({
    llm: {
      model_name: 'gpt-4o',
      model_params: { max_tokens: 1000 }
    },
    templating: {
      template: [
        {
          role: 'system',
          content: 'Please scan the message and list all the masked info first.'
        },
        {
          role: 'user',
          content: 'Please read the message: {{?ticket}} and generate a summary.'
        }
      ]
    },
    // Task 4: data masking
    // TODO: anonymization: person, address, phone
    // REMOVE
    masking: {
      masking_providers: [
        {
          type: 'sap_data_privacy_integration',
          method: 'anonymization',
          entities: [
            {
              type: 'profile-person'
            },
            {
              type: 'profile-address'
            },
            {
              type: 'profile-phone'
            }
          ]
        }
      ]
    }
  });

  const response = await orchestrationClient.chatCompletion({
    inputParams: {
      ticket
    }
  });
  console.log(JSON.stringify(response.rawResponse.data.module_results.input_masking));
  return replaceLineBreakWithBR(response.getContent()!);
}
