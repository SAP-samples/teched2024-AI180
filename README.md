# AI180 - Build your own Generative AI Scenario in a Snap

## Description

This repository contains the material for the SAP TechEd 2024 session called "AI180 - Build your own Generative AI Scenario in a Snap".

## Overview

This session introduces attendees to integrating orchestration capabilities of Generative AI Hub into their own scenarios using SAP Cloud SDK for AI (JavaScript) or SAP generative AI hub SDK (Python).
Accordingly this session offers two parallel tracks:

- [SAP Cloud SDK for AI (JavaScript)](#sap-cloud-sdk-for-ai-javascript)
- [SAP generative AI hub SDK (Python)](#sap-generative-ai-hub-sdk-python)

Both tracks cover identical core concepts and practical applications, differing only in the programming language and SDK utilized. Participants can choose the track that best aligns with their expertise or opt to experience both to broaden their understanding.

By the end of this session, attendees will have gained practical experience in leveraging these powerful SDKs to enhance their AI-driven solutions, regardless of their chosen programming environment. Join us to unlock the full potential of Generative AI in your projects and stay at the forefront of AI integration.

## Shared Requirements

1. Clone the repository. Do so by using your favorite Git client. If you are using the Git command line interface use: `git clone https://github.com/SAP-samples/teched2024-AI180.git`.
2. TODO: add API access instructions

## SAP Cloud SDK for AI (JavaScript)

tbd

### Requirements

The requirements to follow the exercises in this repository are...

### Exercises

Provide the exercise content here directly in README.md using [markdown](https://guides.github.com/features/mastering-markdown/) and linking to the specific exercise pages, below is an example.

- [Getting Started](exercises/javascript/ex0/)
- [Exercise 1 - First Exercise Description](exercises/javascript/ex1/)
  - [Exercise 1.1 - Exercise 1 Sub Exercise 1 Description](exercises/javascript/ex1#exercise-11-sub-exercise-1-description)
  - [Exercise 1.2 - Exercise 1 Sub Exercise 2 Description](exercises/javascript/ex1#exercise-12-sub-exercise-2-description)
- [Exercise 2 - Second Exercise Description](exercises/javascript/ex2/)
  - [Exercise 2.1 - Exercise 2 Sub Exercise 1 Description](exercises/javascript/ex2#exercise-21-sub-exercise-1-description)
  - [Exercise 2.2 - Exercise 2 Sub Exercise 2 Description](exercises/javascript/ex2#exercise-22-sub-exercise-2-description)

**OR** Link to the Tutorial Navigator for example...

Start the exercises [here](https://developers.sap.com/tutorials/abap-environment-trial-onboarding.html).

## SAP generative AI hub SDK (Python)

This track introduces attendees to using orchestration capabilities of Generative AI Hub using the [SAP generative AI hub SDK](https://pypi.org/project/generative-ai-hub-sdk/) in Python.

### Requirements

1. Make sure you meet all the requirements as described in the [Shared Requirements](#shared-requirements) section.
2. Verify that you have a supported and stable version of **Python** installed on your system.
3. Open up a terminal session at the root of the cloned repository. It is highly suggested to create a virtual Python environment for following along to avoid conflicts with other packages that could be already installed on your system. A virtual environment can be created using `python -m venv ENV`. Note: Your Python executable might also be called `python3`. Activate the environment in your current terminal session using either `source ENV/bin/activate` for Unix like systems (MacOS and Linux) or by running the script `ENV/Scripts/Activate.ps1` for Windows. Make sure that all subsequent steps are executed within the context of this newly created virtual environment.
4. Install the [SAP generative AI hub SDK](https://pypi.org/project/generative-ai-hub-sdk/) using pip: `pip install "generative-ai-hub-sdk[all]"`.
5. Configure authentication by setting the following environment variables using the demo credentials. You will find the appropriate values (named accordingly) in the file under the key `python`:

   ```bash
   AICORE_AUTH_URL=<demo-credentials-file.python.AICORE_AUTH_URL>
   AICORE_BASE_URL=<demo-credentials-file.python.AICORE_BASE_URL>
   AICORE_CLIENT_ID=<demo-credentials-file.python.AICORE_CLIENT_ID>
   AICORE_CLIENT_SECRET=<demo-credentials-file.python.AICORE_CLIENT_SECRET>
   AICORE_ORCHESTRATION_DEPLOYMENT_URL=<demo-credentials-file.python.AICORE_ORCHESTRATION_DEPLOYMENT_URL>
   AICORE_RESOURCE_GROUP=<demo-credentials-file.python.AICORE_RESOURCE_GROUP>
   ```

6. You can now open your preferred development environment for Python and start with the exercises. Ensure that the created virtual environment and the set environment variables are used within your development environment.

### Exercises

The exercises are comprised of notebooks demonstrating how to use the SAP generative AI hub SDK to interact with the Orchestration Service, enabling you to build AI-driven workflows by combining multiple modules such as templating, large language models (LLM), and content filtering.

- [Exercise 1 - Orchestration Templating](exercises/python/ex1.ipynb)
- [Exercise 2 - Orchestration Content Filtering](exercises/python/ex2.ipynb)
- [Exercise 3 - Orchestration Chatbot](exercises/python/ex3.ipynb)

Start the exercises [here](exercises/python/ex1.ipynb).

## Contributing

Please read the [CONTRIBUTING.md](./CONTRIBUTING.md) to understand the contribution guidelines.

## Code of Conduct

Please read the [SAP Open Source Code of Conduct](https://github.com/SAP-samples/.github/blob/main/CODE_OF_CONDUCT.md).

## How to obtain support

Support for the content in this repository is available during the actual time of the online session for which this content has been designed. Otherwise, you may request support via the [Issues](../../issues) tab.

## License

Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSES/Apache-2.0.txt) file.
