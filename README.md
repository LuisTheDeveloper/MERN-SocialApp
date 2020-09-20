# MERN-SocialApp
Project build upon udemy training: [MERN Full Stack Web Development with React, Redux and NodeJS](https://www.udemy.com/course/mern-stack-front-to-back/)

Online platform to register skilled developers and connect them, like a social platform for software engineers.

Technologies applied: 
1. NodeJS for backend development. 
NodeJS installed includes the following dependencies packages: 
- **express** for web server framework; 
- **axios** for a promise based http client requests. Replaced the deprecated **request** package.
- **express-validator** for data valiation when making post requests;
- **bcryptjs** to encript and store passwords in a database;
- **jsonwebtoken** to use jwt to pass a token for user validation;
- **mongoose** to ease the interaction with MongoDB;
- **request** for http calls - replaced by **axios** because this package has been fully deprecated, for more info: [here](https://github.com/request/request/issues/3142)
- **config** for global variables management;
- **gravatar** for profile avatars;

NodeJS development dependencies packages (```npm i -D ```):
- **nodemon** for permanent monitoring our server for new code changes;
- **concurrently** which allows us to run our express backend server and out React front end server at the same time with one single command;

2. React for front end development.
React dependencies packages installed:
- **moment** for data parsing, validation, manipulation and formatting;
- **uuid** to generate automatic ids;
- **Redux** for state management, includes: **redux**, **react-redux**, **redux-devtools-extension** and **redux-thunk**;
- **react-router-dom** for React front-end routing;

3. Database to store users, profiles and posts: MongoDB in the cloud
[MongoDB Atlas](https://www.mongodb.com/cloud)

**Landing Page:**
![Imgur](https://imgur.com/zIsQlSo.png)
