## SAP generative AI hub SDK (Python)

This track introduces attendees to using orchestration capabilities of Generative AI Hub using the [SAP generative AI hub SDK](https://pypi.org/project/generative-ai-hub-sdk/) in Python.

### Prerequisite

1. Make sure you meet all the requirements as described in the [How to Start](../../README.md#how-to-start) section.
2. Setup your a Python environment
   - Either use the SAP Business Application Studio. Follow the instructions at <https://github.com/SAP-samples/generative-ai-codejam/blob/main/exercises/02-setup-python-environment.md> for further information on how to do this.
   - Or verify that you have a supported and stable version of **Python** installed on your system. Open up a terminal session at the root of the cloned repository. It is highly suggested to create a virtual Python environment for following along to avoid conflicts with other packages that could be already installed on your system. A virtual environment can be created using `python -m venv ENV`. Note: Your Python executable might also be called `python3`. Activate the environment in your current terminal session using either `source ENV/bin/activate` for Unix like systems (MacOS and Linux) or by running the script `ENV/Scripts/Activate.ps1` for Windows. Make sure that all subsequent steps are executed within the context of this newly created virtual environment.
3. Install the [SAP generative AI hub SDK](https://pypi.org/project/generative-ai-hub-sdk/) using pip: `pip install "generative-ai-hub-sdk[all]"`.
4. Configure authentication by setting the following environment variables using the demo credentials. You will find the appropriate values (named accordingly) in the file under the key `python`:

   ```bash
   AICORE_AUTH_URL=<demo-credentials-file.python.AICORE_AUTH_URL>
   AICORE_BASE_URL=<demo-credentials-file.python.AICORE_BASE_URL>
   AICORE_CLIENT_ID=<demo-credentials-file.python.AICORE_CLIENT_ID>
   AICORE_CLIENT_SECRET=<demo-credentials-file.python.AICORE_CLIENT_SECRET>
   AICORE_ORCHESTRATION_DEPLOYMENT_URL=<demo-credentials-file.python.AICORE_ORCHESTRATION_DEPLOYMENT_URL>
   AICORE_RESOURCE_GROUP=<demo-credentials-file.python.AICORE_RESOURCE_GROUP>
   ```

6. You can now open your preferred development environment for Python and start with the exercises. Ensure that the created virtual environment and the set environment variables are used within your development environment.

> [!TIP]
> We recommend using Jupyter Notebook to explore this tracks exercises.
> You can install it within your virtual environment using `pip install notebook`.
> Afterwards you can use the following command from your repositories root to view and edit the Jupyter Notebooks provided in this track: `jupyter notebook exercises/python/`. A browser window should open up automatically.

### Exercises

The exercises are comprised of notebooks demonstrating how to use the SAP generative AI hub SDK to interact with the Orchestration Service, enabling you to build AI-driven workflows by combining multiple modules such as templating, large language models (LLM), and content filtering.

- [Exercise 1 - Orchestration Templating](./ex1.ipynb)
- [Exercise 2 - Orchestration Content Filtering](./ex2.ipynb)
- [Exercise 3 - Data Masking](./ex3.ipynb)
- [Exercise 4 - Orchestration Chatbot](./ex4.ipynb)

Start the exercises [here](./ex1.ipynb).
