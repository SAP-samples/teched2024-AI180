# Exercise 1 - Getting LLM Access via Orchestration Service

In this exercise, you will learn how to send a simple prompt using the SAP Cloud SDK for AI. 
You’ll also explore the [server-side harmonization feature](https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/harmonized-api?locale=en-US) of the orchestration service.

### 1. Navigate to the Function
Open [orchestration.ts](../app/src/orchestration.ts) file and search for the function `orchestrationCompletionSimple`.

### 2. Add Implementation
Type or uncomment the following code within the function `orchestrationCompletionSimple`:
```typescript
const orchestrationClient = new OrchestrationClient({
    llm: {
        model_name: 'meta--llama3-70b-instruct',
        model_params: { max_tokens: 1000 }
    },
    templating: {
        template: [
            {
                role: 'user',
                content: 'What is SAP TechEd?'
            }
        ]
    }
});
const response = await orchestrationClient.chatCompletion();
return replaceLineBreakWithBR(response.getContent()!);
```
The code snippet does the following:
1. Initialize an `OrchestrationClient` with:
  - A configuration for the LLM model name
  - A model option (max_tokens)
  - A user-provided prompt
2. Calls the chat completion endpoint of the orchestration service.
3. Returns the response content from the orchestration service.

### 3. Restart the Application
Save your changes and wait for the application to automatically restart.

### 4. Check the LLM Response
Open your browser and visit http://localhost:8080/orchestration/simple. You should see the response from the LLM.

### 5. Use Server-Side Harmonization
Modify the code as shown below to switch to a different LLM model while keeping the same configuration and prompt:
```javascript
    llm: {
    // TODO: change the next line
        model_name: 'gemini-1.5-flash',
        model_params: { max_tokens: 1000 }
    },
```

### 6. Check the LLM Response
Repeat the [step 3](#3-restart-the-application) and [step 4](#4-check-the-llm-response) to see the updated response from the new LLM model.


### Troubleshooting TODO
env check

## Summary TODO

You've now ...

Continue to - [Exercise 2 - Exercise 2 Description](../ex2/README.md)

