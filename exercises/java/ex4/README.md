# Exercise 3 - Content Filtering

In this exercise, you will learn how to work with response streaming to improve overall user experience and reduce the observed latency.

### 1. Navigate to the Function
Open [OrchestrationController](../app/src/main/java/org/demo/dsag/OrchestrationController.java) file and search for the function `stream`.

### 2. Add Implementation

You'll see one optional function-argument `topic`, provided as request parameter.
It indicates which topic we'll have a short story written for.
In our example, it is used to enable a dynamic prompt handling for the orchestration service request.

Please notice the return type `Flux<String>`, instead of `Stream<String>`.
We'll use the `Flux` type to continuously stream the response back to the client without blocking the request thread.
This will ensure a more responsive and interactive user experience in the browser.

Type or replace the following code in the function `stream` to enable non-blocking response handling:

```java
var prompt = new OrchestrationPrompt("Please create a small story about " + topic + " with around 700 words.");
var stream = client.streamChatCompletion(prompt, config);
return Flux.fromStream(stream).publishOn(Schedulers.parallel());
```

> [!NOTE]
> The convenience method `streamChatCompletion` returns a `Stream<String`, that we only need to transform to non-blocking `Flux<String>` for Spring Boot to consume.

### 3. Restart the Application
Save your changes and restart the application.

### 4. Check the LLM Response
Open your browser and visit http://localhost:8080/orchestration/stream. 
You will notice that the response is chunked and streamed back as text to the browser in real-time.

> [!IMPORTANT]
> Observed chunk size may be dependent on browser, e.g. Firefox may show smaller chunks faster than Chrome with bigger chunks.
> Unfortunately the Swagger UI does not support streamed responses, it will behave like a blocking request and waits until all chunks are received before displaying.
> 
> To find more clues and examples, you can check our [documentation on Orchestration response streaming](https://sap.github.io/ai-sdk/docs/java/guides/orchestration-chat-completion#streaming).

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
  - [x] Working with **response streaming** to improve user experience and reduce latency.

Feel free to continue your learning journey with the [JavaScript track](../../javascript/README.md)!
