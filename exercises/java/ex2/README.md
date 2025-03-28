# Exercise 2 - Prompt Templating

In this exercise, you will explore how to create and use client-side prompt templates to dynamically generate and send prompts. 
This will enable you to streamline user interactions and tailor responses efficiently within your application.

### 1. Navigate to the Function
Open [OrchestrationController](../app/src/main/java/org/demo/dsag/OrchestrationController.java) file and search for the function `template`.

### 2. Add Implementation

You'll see one optional function-argument `language`, provided as request parameter.
It is used to enable a dynamic prompt for the orchestration service request.

Type the following code in the function `template`:

```java
var template = Message.user("Reply with 'Orchestration Service is working!' in {{?language}}");
var templatingConfig = TemplateConfig.create().withTemplate(List.of(template.createChatMessage()));
var configWithTemplate = config.withTemplateConfig(templatingConfig);
var prompt = new OrchestrationPrompt(Map.of("language", language));
var result = client.chatCompletion(prompt, configWithTemplate);
return result.getContent();
```

> [!NOTE]
> In this exercise, a few notable modifications are introduced to improve the model’s flexibility and input handling:
> - A list of messages is maintained for the template. Currently, including only a single user message.
> - The LLM configuration is extended by applying the template configuration.
> - You will use a client-side prompt template that includes a dynamic placeholder only.
> - When calling the chat completion endpoint, the static template is provided in combination with the prompt including the populated language parameter.

### 3. Restart the Application
Save your changes and wait for the application to restart automatically.

### 4. Check the LLM Response
Open your browser and visit http://localhost:8080/orchestration/template. 
You should see a response in the language of your choice.

> [!IMPORTANT]
> We strongly recommend adjusting the following values to meet your specific use case:
> - Model options
> - Messages to include a system prompt and additional user prompts (templates)
> - Parameters for populating variables defined in the prompt template

## Summary

**Excellent!**

Now, let’s take a closer look at the key concepts you’ve learned so far.
- **Client-Side Prompt Templates**: You demonstrated how to use prompt templates on the client side to send prompts dynamically.
- **System & User Prompts**: In addition to handling user-provided prompts, you also showcased how to send an instruction through a system prompt, enabling more control over the response behavior.

You’re now ready to move on to the next step.
Continue to [Exercise 3 - Content Filtering](../ex3/README.md)
