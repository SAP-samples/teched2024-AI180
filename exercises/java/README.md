# Use SAP Cloud SDK for AI (JavaScript)

This track introduces attendees to using orchestration capabilities of SAP Generative AI Hub using the [SAP Cloud SDK for AI (Java)](https://github.com/SAP/ai-sdk-java).
You can find all mentioned features and some most samples in the [SDK documentation portal](https://sap.github.io/ai-sdk/).

## 1. Prerequisite

1. Follow all the instructions as described in the [How to Start](../../README.md#how-to-start) section.
2. After receiving the test system access details via email, update the [.env](app/.env), by using the attached file.
```
AICORE_SERVICE_KEY='{"clientid": "<demo-credentials-file.js.clientid>","clientsecret": "<demo-credentials-file.js.clientsecret>","url": "<demo-credentials-file.js.url>","serviceurls": {"AI_API_URL": "<demo-credentials-file.js.serviceurls.AI_API_URL>"}}'
```
3. It is highly recommended to use an IDE like [IntelliJ](https://www.jetbrains.com/idea/download/?section=windows#community-edition).
Open the project that you cloned from the previous [step](../../README.md#how-to-start).
4. Check whether _Maven_ is installed and a modern version of _Java_ (i.e. JRE17+). Your installed IDE (e.g. _IntelliJ_) may already provide the relevant tools for you. 

## 2. Project Structure
The [project](app) used for this session is a neat [Spring Boot](https://spring.io/projects/spring-boot)-based web application.

### 2.1 Dependencies
The necessary dependencies for the exercises are specified in the [pom.xml](app/pom.xml).
Additional dependencies or plugins are not required for the exercises.
However, you are free to add any dependencies or plugins you find useful. 

The _SAP Cloud SDK for AI_ uses the group-id [com.sap.ai.sdk](https://mvnrepository.com/artifact/com.sap.ai.sdk), e.g., [com.sap.ai.sdk:orchestration](https://mvnrepository.com/artifact/com.sap.ai.sdk/orchestration), for orchestration service consumption.

### 2.2 Related Source Code
- The [Application](app/src/main/java/org/demo/dsag/Application.java) class defines the application root, including application based annotations.
  You can execute the `main()` method from here to start the application easily.

- The [OrchestrationController](app/src/main/java/org/demo/dsag/OrchestrationController.java) class contains all relevant endpoint definitions and their implementation details.
  Here we'll write the code for calling the orchestration service using the client libraries provided by the SAP Cloud SDK.
  You will mainly work with this file during your exercises.

> [!NOTE]
> Most endpoints will not return meaningful responses until the exercises are completed.

> [!TIP]
> While the method stubs are provided, the implementation is left to you.
> The exercises give hints and solution to approach the target implementation, but you are encouraged to just try out.
> See how the IDE guides you, what methods and options are available.
> Maybe you can figure out the solution by yourself. 
> This approach will allow you to experience the full developer workflow, including useful features like auto-completion and debugging. 
> By typing the code, you’ll better understand the logic, discover useful functions, and build muscle memory, all of which contribute to a deeper learning experience.

### Exercises

The exercises demonstrate how to use the SAP generative AI hub SDK to interact with the [orchestration service](https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/orchestration?locale=en-US), enabling you to build AI-driven workflows by combining multiple modules such as templating, large language models (LLM), and content filtering.

- [Preparation](ex0/README.md)
- [Exercise 1 - Getting LLM Access via Orchestration Service](ex1/README.md)
- [Exercise 2 - Prompt Templating](ex2/README.md)
- [Exercise 3 - Content Filtering](ex3/README.md)
- [Exercise 4 - Streamed Responses](ex4/README.md)

Start from [here](./ex0/README.md).

### Troubleshooting

If you encounter errors, please look closely at the exceptions and stacktraces.

For detailed HTTP context, you can enable the debug logging for different packages in the `src/main/resources/application.properties` file.
Use `DEBUG` instead of `WARN` to extract verbose logs.