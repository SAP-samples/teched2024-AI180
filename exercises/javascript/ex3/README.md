# Exercise 3 - Content Filtering

In this exercise, you will learn how to configure content filters to detect and take actions on potentially harmful content.

### 1. Navigate to the Function 
Open [orchestration.ts](../app/src/orchestration.ts) file and search for the function `orchestrationCompletionFiltering`.

### 2. Add Implementation
Type or uncomment the following code in the function `orchestrationCompletionFiltering` to enable input filtering:

```typescript
const orchestrationClient = new OrchestrationClient({
    llm: {
        model_name: 'gemini-1.5-flash',
        model_params: { max_tokens: 1000 }
    },
    templating: {
        template: [
            { role: 'user', content: 'I want to break my legs. Any suggestions?' }
        ]
    },
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
```

> [!NOTE]
> We added an input filter using the convenient method `buildAzureContentFilter` to block content based on a predefined sensitivity level.

### 3. Restart the Application
Save your changes and wait for the application to restart automatically.

### 4. Check the LLM Response
Open your browser and visit http://localhost:8080/orchestration/filtering. 
If the filter is triggered, you should see an error message like this:

```
Error: {"request_id":"xxx","code":400,"message":"Content filtered due to Safety violations. Please modify the prompt and try again.",
"location":"Input Filter","module_results":{"templating":[{"role":"user","content":"I want to break my legs. Any suggestions?"}],
"input_filtering":{"message":"Content filtered due to Safety violations. Please modify the prompt and try again.",
"data":{"azure_content_safety":{"SelfHarm":4}}}}}
```

### 5. Change the Content Filtering Configuration
To make the filter less strict, modify the code as shown below:
```javascript
    filtering: {
        // TODO: change the next line
        input: buildAzureContentFilter({ SelfHarm: 6 })
    }
```
### 6. Check the LLM Response
Repeat [step 3](#3-restart-the-application) and [step 4](#4-check-the-llm-response) to see the updated response from the orchestration service.

> [!TIP]
> With the updated threshold, the input (user-provided prompt) should not be filtered before sending to the LLM.

> [!IMPORTANT]
> As the input filter has been configured in the most tolerant level, you might want to add an output filter, to make sure potential harmful content from the LLM will be filtered before sending back to the user.
> 
> This is an optional exercise for you.
> To find some clues, you can either check our [documentation](https://github.com/SAP/ai-sdk-js/tree/main/packages/orchestration#content-filtering) or check the type of the `filtering` [here](https://github.com/SAP/ai-sdk-js/blob/main/packages/orchestration/src/orchestration-types.ts).

## Summary

**Congratulations on completing the JavaScript hands-on session!**

You’ve successfully tackled all the exercises. 
Here’s a quick checklist of what you’ve achieved:
- [x] Ensured that your environment runs the **minimal required Node version (Node 20)** for the SAP Cloud SDK for AI.
- [x] Learned how to utilize a `.env` file to securely store the service key for local testing.
- [x] Worked with the **orchestration client** (powered by SAP Cloud SDK for AI), including:
  - [x] Configuring the **LLM model name**.
  - [x] Setting up various **model options** for tailored usage.
  - [x] Managing **system and user prompts** to enhance interaction with the LLM.
  - [x] Implementing **client-side prompt templating** for more flexible input handling.
  - [x] Configuring **content filtering** to ensure both input and output data are properly screened.

Feel free to continue your learning journey with the [Python track](../../python/README.md)!
