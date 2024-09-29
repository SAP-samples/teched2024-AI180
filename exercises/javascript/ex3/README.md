# Exercise 3 - Content Filtering

In this exercise, you will learn how to configure content filters to detect and take actions on potential harmful contents. 

### 1. Navigate to the Function 
Open [orchestration.ts](../app/src/orchestration.ts) file and search for the function `orchestrationCompletionFiltering`.

### 2. Add Implementation
Type or uncomment the following code in the function `orchestrationCompletionFiltering`:

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
> In this exercise, we added an input filter, with the help of a convenient method `buildAzureContentFilter`.

### 3. Restart the Application
Save your changes and wait for the application to automatically restart.

### 4. Check the LLM Response
Open your browser and visit http://localhost:8080/orchestration/filtering. 
You should see an error, containing the reason why the LLM output is filtered like below:

```
Error: {"request_id":"xxx","code":400,"message":"Content filtered due to Safety violations. Please modify the prompt and try again.",
"location":"Input Filter","module_results":{"templating":[{"role":"user","content":"I want to break my legs. Any suggestions?"}],
"input_filtering":{"message":"Content filtered due to Safety violations. Please modify the prompt and try again.",
"data":{"azure_content_safety":{"SelfHarm":4}}}}}
```

### 5. Change the Content Filtering Configuration
Modify the code as shown below to make the filter less strict:
```javascript
    filtering: {
        // TODO: change the next line
        input: buildAzureContentFilter({ SelfHarm: 6 })
    }
```
### 6. Check the LLM Response
Repeat the [step 3](#3-restart-the-application) and [step 4](#4-check-the-llm-response) to see the updated response from the orchestration service.

> [!TIP]
> With the updated threshold, the input (user-provided prompt) should not be filtered before sending to the LLM.

> [!CAUTION]
> As the input filter has been configured in the most tolerant level, you might want to add an output filter, to make sure potential harmful content from the LLM will be filtered before sending back to the user.
> 
> This is a challenge for you.
> To find some clues, you can either check our [documentation](https://github.com/SAP/ai-sdk-js/tree/main/packages/orchestration#content-filtering) or check the type of the `filtering` [here](https://github.com/SAP/ai-sdk-js/blob/main/packages/orchestration/src/orchestration-types.ts).

## Summary TODO

You've now ...

Continue to - [Exercise 3 - Exercise 3 ](../ex3/README.md)
