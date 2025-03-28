# Preparation

By completing these steps, you will have a [Spring Boot](https://spring.io/projects/spring-boot)-based web application up and running.

### Prerequisites:
- [ ] Java (JRE17+) and Maven installed.
  Some IDEs (e.g. [IntelliJ](https://www.jetbrains.com/idea/download/?section=windows#community-edition)) may already provide the relevant tools for you.

### 1. Navigate to the Application Directory:

Assuming you are still in the root directory of the repository, navigate to the app folder:
```shell
cd exercises/java/app
```

### 2. Install Dependencies:

Install the required dependencies using:
```shell
mvn clean install
```
> [!NOTE]
> `mvn clean install` removes any pre-built files for your compiled application and compiles the application into an executable binary. Also, it downloads and installs missing dependencies into your local Maven repository (e.g. `~/.m2`).

### 3. Start the Application:

You can run the application in your IDE by directly executing the `Application` class, or alternatively use the following command to start the app locally via Maven:

```shell
mvn spring-boot:run
```

### 4. Verify the Application is Running:
After a few seconds, you should see the following log message:
```
Tomcat initialized with port 8080 (http)
```

### 5. Access the Application:
Open your browser and visit http://localhost:8080/.
You should see a Swagger UI page with the API documentation for your _Spring Boot_ app.
Feel free to explore the site and **try out** the different endpoints.


### Troubleshooting:
If you encounter errors, please look closely at the exception.
And try checking if port 8080 is in use:
```shell
lsof -i :8080
```

## Summary 
**Congratulations!**

Your Spring Boot application is up and running.

You’re now ready to move on to the next step. 
Continue to [Exercise 1 - Getting LLM Access via Orchestration Service](../ex1/README.md).
