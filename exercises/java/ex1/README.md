# Exercise 1 - Getting LLM Access via Orchestration Service

In this exercise, you will learn how to send a user-provided prompt using the SAP Cloud SDK for AI. 
You’ll also explore the [harmonized LLM access feature](https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/harmonized-api?locale=en-US) of the orchestration service.

### 1. Navigate to the Function
Open [OrchestrationController](../app/src/main/java/org/demo/dsag/OrchestrationController.java) file and search for the function `simple`.

### 2. Add Implementation

You'll see one optional function-argument `phrase`, provided as request parameter.
It is used to enable a dynamic prompt for the orchestration service request.

Type the following code within the function `simple`:
```java
var prompt = new OrchestrationPrompt(phrase + " Why is this phrase so famous?");
var result = client.chatCompletion(prompt, config);
return result.getContent();
```
> [!NOTE]
> The code snippet does the following:
> 1. Construct a concatenated prompt using the provided "phrase" and a question.
> 2. Call the chat completion endpoint of the orchestration service.
> 3. Return the string response content from the orchestration service.

### 3. Restart the Application
Save your changes and restart the application.

### 4. Check the LLM Response
Open your browser and visit http://localhost:8080/orchestration/simple.
Or alternatively use the _Swagger UI_ accessible from the website root.
You should see the response from the LLM.

> [!TIP]
> You should see the following log messages, as the service key from the [.env](../app/.env) file is in use.
> ```
> Found a service key in environment variable AICORE_SERVICE_KEY.
> Using a service key is recommended for local testing only.
> Bind the AI Core service to the application for productive usage.
> ```

### 5. Use Harmonized LLM Access
Modify the code as shown below to switch to a different LLM model while keeping the same configuration and prompt:
```java
private final OrchestrationModuleConfig config =
  new OrchestrationModuleConfig().withLlmConfig(GPT_4O_MINI.withParam(MAX_TOKENS, 1000));
```

### 6. Check the LLM Response
Repeat [step 3](#3-restart-the-application) and [step 4](#4-check-the-llm-response) to see the updated response from the new LLM model.

## Summary

**Great job!**

- You have successfully used the SAP Cloud SDK for AI to send a user-provided prompt.
- Additionally, you tested the [harmonized LLM access feature](https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/harmonized-api?locale=en-US) of the orchestration service by switching the model name seamlessly.

You’re now ready to move on to the next step.
Continue to [Exercise 2 - Prompt Templating](../ex2/README.md)

