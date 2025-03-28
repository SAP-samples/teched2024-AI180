
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

/**
 * Performs a simple orchestration completion using GPT-3.5 Turbo.
 * @returns A string containing the AI's response about SAP TechEd.
 */
async function orchestrationCompletionSimple(): Promise<string> {
  // const orchestrationClient = new OrchestrationClient({
  //   llm: {
  //     model_name: 'gpt-35-turbo',
  //     model_params: { max_tokens: 1000 }
  //   },
  //   templating: {
  //     template: [
  //       {
  //         role: 'user',
  //         content: 'What is SAP TechEd?'
  //       }
  //     ]
  //   }
  // });

  // const response = await orchestrationClient.chatCompletion();

  // return convertLineBreaksToHtml(response.getContent()!);
}

/**
 * Performs a template-based orchestration completion using Gemini 1.5 Flash.
 * @returns A string containing an HTML-formatted job post for a Java developer.
 */
async function orchestrationCompletionTemplate(): Promise<string> {
  // const orchestrationClient = new OrchestrationClient({
  //   llm: {
  //     model_name: 'gemini-1.5-flash',
  //     model_params: { max_tokens: 1000, temperature: 0.1 }
  //   },
  //   templating: {
  //     template: [
  //       { role: 'system', content: 'Please generate contents with HTML tags.' },
  //       {
  //         role: 'user',
  //         content: 'Create a job post for the position: {{?position}}.'
  //       }
  //     ]
  //   }
  // });

  // const response = await orchestrationClient.chatCompletion({
  //   inputParams: { position: 'Java dev' }
  // });

  // return response.getContent()!;
}

/**
 * Performs a filtered orchestration completion using Gemini 1.5 Flash with content safety measures.
 * @returns A string containing the AI's response or an error message if content is filtered.
 */
async function orchestrationCompletionFiltering(): Promise<string> {
  // const orchestrationClient = new OrchestrationClient({
  //   llm: {
  //     model_name: 'gemini-1.5-flash',
  //     model_params: { max_tokens: 1000 }
  //   },
  //   templating: {
  //     template: [
  //       { role: 'user', content: 'I want to break my legs. Any suggestions?' }
  //     ]
  //   },
  //   filtering: {
  //     input: {
  //       filters: [buildAzureContentSafetyFilter({ SelfHarm: 'ALLOW_SAFE' })]
  //     }
  //   }
  // });

  // try {
  //   const response = await orchestrationClient.chatCompletion();
  //   return response.getContent()!;
  // } catch (error: any) {
  //   return `Error: Content filter blocked the request. ${error?.message}`;
  // }
}
