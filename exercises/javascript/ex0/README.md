# Preparation

After completing these steps, you will have an [Express](https://www.npmjs.com/package/express)-based web application up and running.

### Prerequisites:
- [ ] Node.js (v20) and npm installed.

You can verify Node.js and npm installations with the following commands:

```shell
node -v
npm -v
```

### 1. Navigate to the Application Directory:

Assuming you are still in the root directory of the [teched2024-AI180 repository, navigate to the app folder:
```shell
cd exercises/javascript/app
```

### 2. Install Dependencies:

Install the required dependencies using:
```shell
npm ci
```
> [!NOTE]
> `npm ci` installs dependencies as per `package-lock.json`, ensuring consistency.

### 3. Start the Application:
Run the following to start the app locally:
```shell
npm run local
```
### 4. Verify the Application is Running:
After a few seconds, you should see the following log message:
```
Server running at http://localhost:8080
```

### 5. Access the Application:
Open your browser and visit http://localhost:8080/. You should see the message:
```
Hello World! 🌍
```

### Troubleshooting:
If you encounter errors, try checking if port 8080 is in use:
```shell
lsof -i :8080
```

## Summary TODO

Now that you have ... 
Continue to - [Exercise 1 - Exercise 1 Description](../ex1/README.md)
