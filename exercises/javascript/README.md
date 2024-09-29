# Use SAP Cloud SDK for AI (JavaScript)

This track introduces attendees to using orchestration capabilities of SAP Generative AI Hub using the [SAP Cloud SDK for AI (JavaScript)](https://github.com/SAP/ai-sdk-js).

## 1. Prerequisite

1. Follow all the instructions as described in the [How to Start](../../README.md#how-to-start) section.
2. After receiving the test system access details via email, update the [.env](app/.env), by using the attached file.
TODO: check unused dependencies.
```
AICORE_SERVICE_KEY='{"clientid": "<demo-credentials-file.js.clientid>","clientsecret": "<demo-credentials-file.js.clientsecret>","url": "<demo-credentials-file.js.url>","serviceurls": {"AI_API_URL": "<demo-credentials-file.js.serviceurls.AI_API_URL>"}}'
```
3. It is highly recommended to use an IDE like [VS Code](https://code.visualstudio.com) or [WebStorm](https://www.jetbrains.com/webstorm/).
Open the project that you cloned from the previous [step](../../README.md#how-to-start).
4. Install Node 20.

## 2. Project Structure
The [project](app) used for this session is an [Express](https://www.npmjs.com/package/express)-based web application.

### 2.1 Dependencies
The necessary dependencies for the exercises are specified in the [package.json](app/package.json). 
The SAP Cloud SDK for AI uses the scope [@sap-ai-sdk](https://www.npmjs.com/search?q=%40sap-ai-sdk), e.g., [@sap-ai-sdk/orchestration](https://www.npmjs.com/package/@sap-ai-sdk/orchestration), for npm packages.

### 2.2 Related Source Code
The [server.ts](app/src/server.ts) file defines the application, including the startup process, the list of exposed endpoints, and their implementation.

The [orchestration.ts](app/src/orchestration.ts) file contains implementation details for calling the orchestration service using the client libraries provided by the SAP Cloud SDK.
You will mainly work with this file during your exercises.

> [!NOTE]
> Most endpoints will not return meaningful responses until the exercises are completed.

> [!TIP]
> The solutions to the exercises are provided but commented out. 
> We strongly recommend that you attempt to solve the exercises by writing the code yourself instead of just uncommenting or copying the solution. 
> This approach will allow you to experience the full developer workflow, including useful features like auto-completion and debugging. 
> By typing the code, you’ll better understand the logic, discover useful functions, and build muscle memory, all of which contribute to a deeper learning experience.

### Exercises

The exercises are comprised of notebooks demonstrating how to use the SAP generative AI hub SDK to interact with the Orchestration Service, enabling you to build AI-driven workflows by combining multiple modules such as templating, large language models (LLM), and content filtering.

- [Preparation](ex0/README.md)
- [Exercise 1 - Getting LLM Access via Orchestration Service](ex1/README.md)
- [Exercise 2 - Prompt Templating](ex2/README.md)
- [Exercise 3 - Content Filtering](ex3/README.md)

Start from [here](./ex0/README.md).
