# Exercise 1 - Getting LLM Access via Orchestration Service

In this exercise, you will learn how to send a user-provided prompt using the SAP Cloud SDK for AI. 
You’ll also explore the [harmonized LLM access feature](https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/harmonized-api?locale=en-US) of the orchestration service.

### 1. Navigate to the Function
Open [orchestration.ts](../app/src/orchestration.ts) file and search for the function `orchestrationCompletionSimple`.

### 2. Add Implementation
Type or uncomment the following code within the function `orchestrationCompletionSimple`:
```typescript
const orchestrationClient = new OrchestrationClient({
    llm: {
        model_name: 'gpt-35-turbo',
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
> [!NOTE]
> The code snippet does the following:
> 1. Initialize an `OrchestrationClient` with:
>  - A configuration for the LLM model name
>  - A model option (max_tokens)
>  - A user-provided prompt
> 2. Calls the chat completion endpoint of the orchestration service.
> 3. Returns the response content from the orchestration service.

### 3. Restart the Application
Save your changes and wait for the application to restart automatically.

### 4. Check the LLM Response
Open your browser and visit http://localhost:8080/orchestration/simple. 
You should see the response from the LLM.

> [!TIP]
> You should see the following log messages, as the service key from the [.env](../app/.env) file is in use.
> ```
> INFO     (context): Found a service key in environment variable "AICORE_SERVICE_KEY". Using a service key is recommended for local testing only. Bind the AI Core service to the application for productive usage.
> ```

### 5. Use Harmonized LLM Access
Modify the code as shown below to switch to a different LLM model while keeping the same configuration and prompt:
```javascript
    llm: {
    // TODO: change the next line
        model_name: 'gemini-1.5-flash',
        model_params: { max_tokens: 1000 }
    },
```

### 6. Check the LLM Response
Repeat [step 3](#3-restart-the-application) and [step 4](#4-check-the-llm-response) to see the updated response from the new LLM model.

## Summary

**Great job!**

- You have successfully used the SAP Cloud SDK for AI to send a user-provided prompt.
- Additionally, you tested the [harmonized LLM access feature](https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/harmonized-api?locale=en-US) of the orchestration service by switching the model name seamlessly.

You’re now ready to move on to the next step.
Continue to [Exercise 2 - Prompt Templating](../ex2/README.md)

