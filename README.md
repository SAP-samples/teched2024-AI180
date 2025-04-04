[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/teched2024-AI180)](https://api.reuse.software/info/github.com/SAP-samples/teched2024-AI180)

> [!CAUTION]
> Access to test systems are considered temporal.
> However, in all cases you can still use the sample code and tutorial available in this repository.
> 
> If you are part of a workshop session, the speakers will share the credentials with you.

# AI180 - Build your own generative AI scenario in a Snap

## Description

This repository contains combined material from multiple sessions:
* SAP TechEd 2024 ["AI180 - Build your own generative AI scenario in a Snap"](https://www.sap.com/events/teched/virtual/flow/sap/te24/catalog/page/catalog/session/1722557682293001fTqe).
* DSAG TechXchange 2025 ["H35: Create Your Generative AI Scenario with Ease​"](https://dsagtechxchange.plazz.net/)

## Overview

This session introduces you to integrating orchestration capabilities of Generative AI Hub, SAP AI Core, into your own scenarios using SAP Cloud SDK for AI (JavaScript/Java) or SAP generative AI hub SDK (Python).
Accordingly, this session offers two parallel tracks:

- [SAP generative AI hub SDK (Python)](exercises/python/README.md)
- [SAP Cloud SDK for AI (JavaScript)](exercises/javascript/README.md)
- [SAP Cloud SDK for AI (Java)](exercises/java/README.md)

All tracks cover identical core concepts and practical applications, differing only in the programming language and SDK utilized. You may choose the track that best aligns with your expertise or technology stack. You may also opt to experience multiple tracks to broaden your understanding.

By the end of this session, you will have gained practical experience in leveraging these powerful SDKs to enhance your AI-driven solutions, regardless of your chosen programming environment. Join the session to unlock the full potential of Generative AI in your projects and stay at the forefront of AI integration.

## Get started

Depending on the session, there may be different onboarding steps.

<details><summary>DSAG TechXchange 2025</summary>

* Please follow the instructions of the speakers.
* Upon sending an email to a specific address you will receive the required service key.
* It will enable you to interact with live systems.

</details>

<details><summary>SAP TechEd 2024</summary>
    
Please note:
* As part of this **Jump Start** session, we are offering free access to limited number of hands-on test systems, for limited duration.
* To receive your test system, you must follow the below outlined process for submitting a request.


### Disclaimer
 
While requesting for access to hands-on test systems, note the following terms:
1. **Single Request Policy**: Please submit only one request per individual. Submitting requests on behalf of others is strictly **prohibited**.
1. **Limited Availability**: Access to the test system is limited to the first **100** applications only. Requests submitted before the start of our session, AI180, will not be considered to ensure fairness. If you are not among the first 100 applicants, you may not receive a test system.
1. **Email Notification**: If approved, you will receive system access details via email within **24 hours**.
1. **System Duration**: The test system will be disabled at 17:00 CEST on Wed, ~Oct 16~ Oct 31 (updated).
1. **Token and Rate Limits**: Each large language model (LLM) used in the exercises has a fixed input and output token limit (smaller than the limit available in production scenarios). In addition, there is a global rate limit per minute for number of requests made.
1. **Testing/Learning Purposes Only**: The test system is intended solely for testing or learning purposes and **not for any productive or commercial use**.
1. **Malicious Usage**: Any detection of malicious usage will result in immediate termination of your test system access. Depending on the severity of the abuse, legal action may be pursued. An example of malicious behavior includes repeatedly hitting the rate limit every minute, for more than 8 hours a day.
1. **Available Models**: We currently offer two large language models for testing: `gemini-1.5-flash` and `meta-llama3-70b-instruct`.
1. **Feature Changes**: Do not make any business decisions on the contents of this exercise. SAP reserves the right to change or deprecate any feature of the Orchestration Service in future, without any prior notifiation.

Please note:
* Based on the number of hands-on testing requests and system usage, we may be able to grant access to additional applicants and extend the testing duration. In such cases, we will update this README accordingly, and early applicants on the waiting list will receive access details via email.
* If you have your own AI Core instances for consuming Generative AI Hub capabilities, you can follow this tutorial using those instances.
  Please make the following adjustments:
    * You need to create a deployment for orchestration by referring the [documentation](https://help.sap.com/docs/sap-ai-core/sap-ai-core-service-guide/create-deployment-for-orchestration?locale=en-US).
    * Before beginning the exercises, you’ll need to provide system information. Instead of using the hands-on test system provided for this tutorial, use your own AI Core instance details, such as the AI Core client ID, secret, and authentication URL.
    * If you’re running your application on BTP rather than locally, the SDKs will automatically retrieve your AI Core instance information from the VCAP_SERVICES environment variable. 

### How to Start
1. **Apply for the Test Systems**:
    - Use this [template](#template-for-requesting-the-test-system), fill in your information and send it to `teched.2024.ai180.registration.bot@sap.com`.
2. **Clone the Repository**:
    - Clone the repository using your preferred Git client. If you’re using the Git command line interface, run the following command:
```bash
git clone https://github.com/SAP-samples/teched2024-AI180.git
```
3. **Select Your Programming Language**: 
    - Choose between [JavaScript](exercises/javascript/README.md) or [Python](exercises/python/README.md) by clicking the respective links.

### Template for Requesting the Test System
```
Email Subject: 
[TechEd 2024 AI180] Request: Access to Test System

Email Body:
- Name: <Your-Name>
- Company: <Your-Company-Name>
- Business Email Address: <Your-Business-Email-Address>
```

</details>

## Contributing

Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) to understand the contribution guidelines.

## Code of Conduct

Please read the [SAP Open Source Code of Conduct](https://github.com/SAP-samples/.github/blob/main/CODE_OF_CONDUCT.md).

## How to obtain support

Support for the content in this repository is available during the actual time of the online session for which this content has been designed. Otherwise, you may request support via the [Issues](../../issues) tab.

## License

Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
