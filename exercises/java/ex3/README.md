# Exercise 3 - Content Filtering

In this exercise, you will learn how to configure content filters to detect and take actions on potentially harmful content.

### 1. Navigate to the Function
Open [OrchestrationController](../app/src/main/java/org/demo/dsag/OrchestrationController.java) file and search for the function `filtering`.

### 2. Add Implementation

You'll see one optional function-argument `policy`, provided as request parameter.
It represents the sensitivity level for the content input filter, with default value `ALLOW_ALL` indicates no filtering on user messages.
It is used to enable a dynamic prompt handling for the orchestration service request.

Type or uncomment the following code in the function `filtering` to enable input filtering:

```typescript
var prompt = new OrchestrationPrompt("'We shall spill blood tonight', said the operator in-charge.");
var filterConfig = new AzureContentFilter().hate(policy).selfHarm(policy).sexual(policy).violence(policy);
var configWithFilter = config.withInputFiltering(filterConfig);
var result = client.chatCompletion(prompt, configWithFilter);
return result.getContent();
```

> [!NOTE]
> We added an input filter using the convenient method `withInputFiltering` with `AzureContentFilter` to block request content based on a predefined sensitivity level.

### 3. Restart the Application
Save your changes and wait for the application to restart automatically.

### 4. Check the LLM Response
Open your browser and visit http://localhost:8080/orchestration/filtering. 
If the filter is triggered upon request, you should see an error message like this:

```
{
  "timestamp": "2025-03-28T19:35:50.824+00:00",
  "status": 500,
  "error": "Internal Server Error",
  "message": "Content filtered due to safety violations. Please modify the prompt and try again.",
  "path": "/orchestration/filtering"
}
```

### 5. Change the Content Filtering Configuration
To make the filter less/more strict, modify the query parameter as part of your request.
These are two ends of the spectrum, with `ALLOW_ALL` being the most tolerant and `ALLOW_SAFE` being the strictest:
```
http://localhost:8080/orchestration/filtering?policy=ALLOW_ALL
http://localhost:8080/orchestration/filtering?policy=ALLOW_SAFE
```

### 6. Check the LLM Response
Repeat [step 3](#3-restart-the-application) and [step 4](#4-check-the-llm-response) to see the updated response from the orchestration service.

> [!TIP]
> With the updated threshold, the input (user-provided prompt) should not be filtered before sending to the LLM.

> [!IMPORTANT]
> As the input filter has been configured in the most tolerant level, you might want to add an output filter, to make sure potential harmful content from the LLM will be filtered before sending back to the user.
> 
> This is an optional exercise for you.
> To find some clues, you can either check our [documentation on Orchestration prompt filtering](https://sap.github.io/ai-sdk/docs/java/guides/orchestration-chat-completion#filtering).

## Summary

**Congratulations on completing the Java hands-on session!**

You’ve successfully tackled all the exercises. 
Here’s a quick checklist of what you’ve achieved:
- [x] Ensured that your environment runs the **required minimum Java (JRE17) and Maven** for the SAP Cloud SDK for AI.
- [x] Learned how to utilize a `.env` file to securely store the service key for local testing.
- [x] Worked with the **orchestration client** (powered by SAP Cloud SDK for AI), including:
  - [x] Configuring the **LLM model name**.
  - [x] Setting up various **model options** for tailored usage.
  - [x] Managing **system and user prompts** to enhance interaction with the LLM.
  - [x] Implementing **client-side prompt templating** for more flexible input handling.
  - [x] Configuring **content filtering** to ensure both input and output data are properly screened.

Feel free to continue your learning journey with the [JavaScript track](../../javascript/README.md)!
