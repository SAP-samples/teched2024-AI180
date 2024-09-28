# Exercise 1 - Getting LLM Access via Orchestration Service

In this exercise, we will demonstrate how to send a simple prompt by using the SAP Cloud SDK for AI.
You will also practise the server-side harmonization feature of the orchestration service.

### 1. Navigate to the Function
Open [orchestration.ts](../app/src/orchestration.ts) file and search for the function `orchestrationCompletionSimple`.

### 2. Add Implementation
Type or uncomment the following code in the function `orchestrationCompletionSimple`:
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
  - an LLM model name configuration
  - an option for the chosen model, which is `max_tokens`
  - a user prompt
2. Call the Chat Completion Endpoint of the orchestration service
3. Return the response content from the orchestration service

### 3. Restart the Application
Save your changes and wait for the automatic restarting of the application.

### 4. Check the LLM Response
Open your browser and visit http://localhost:8080/orchestration/simple. You should see the response from the LLM.

### 5. Use Server-Side Harmonization
Now modify the code like below, so you can switch to a different LLM with the same configuration and the same prompt.
```javascript
    llm: {
    // TODO: change the next line
        model_name: 'gemini-1.5-flash',
        model_params: { max_tokens: 1000 }
    },
```

### 6. Check the LLM Response
Repeat the [step 3](#3-restart-the-application) and [step 4](#4-check-the-llm-response) to see the updated response.


## Summary

You've now ...

Continue to - [Exercise 2 - Exercise 2 Description](../ex2/README.md)

