# Exercise 2 - Prompt Templating

In this exercise, you will explore how to create and use client-side prompt templates to dynamically generate and send prompts. 
This will enable you to streamline user interactions and tailor responses efficiently within your application.

### 1. Navigate to the Function 
Open [orchestration.ts](../app/src/orchestration.ts) file and search for the function `orchestrationCompletionTemplate`.

### 2. Add Implementation
Type or uncomment the following code in the function `orchestrationCompletionTemplate`:

```typescript
const orchestrationClient = new OrchestrationClient({
    llm: {
        model_name: 'gemini-1.5-flash',
        model_params: { max_tokens: 1000, temperature: 0.1 }
    },
    templating: {
        template: [
            { role: 'system', content: 'Please generate contents with HTML tags.' },
            {
                role: 'user',
                content: 'Create a job post for the position: {{?position}}.'
            }
        ]
    }
});

const response = await orchestrationClient.chatCompletion({
    inputParams: { position: 'Java dev' }
});

return response.getContent();
```

> [!NOTE]
> In this exercise, a few notable modifications are introduced to improve the model’s flexibility and input handling:
> - You’ll configure an additional model option, temperature, which controls the randomness of the model’s responses.
> - A system prompt will be added to guide the model’s behavior.
> - You will use a client-side prompt template that includes a placeholder, position.
> - When calling the chat completion endpoint, you’ll pass an input parameter to provide the value of the position variable.

### 3. Restart the Application
Save your changes and wait for the application to restart automatically.

### 4. Check the LLM Response
Open your browser and visit http://localhost:8080/orchestration/template. 
You should see a nice HTML page generated by the LLM.

> [!IMPORTANT]
> We strongly recommend adjusting the following values to meet your specific use case:
> - Model options
> - System prompt
> - User provided prompt (template)
> - Parameters for populating variables defined in the prompt template

## Summary

**Excellent!**

Now, let’s take a closer look at the key concepts you’ve learned so far.
- **Client-Side Prompt Templates**: You demonstrated how to use prompt templates on the client side to send prompts dynamically.
- **System & User Prompts**: In addition to handling user-provided prompts, you also showcased how to send an instruction through a system prompt, enabling more control over the response behavior.

You’re now ready to move on to the next step.
Continue to [Exercise 3 - Content Filtering](../ex3/README.md)
