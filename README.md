# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.Introduction
Peered is a collaborative tool for peer programming, where users can write code and work together on programming projects. The target audience includes college students between the ages of 18 and 22.
Technologies Used
	1	Frontend: React, CSS ChakraUI
	2	Backend: Node, Express Axios
	3	Database: PostgreSQL, Prisma ORM
	4	APIs: Piston APIm, Unsplash Image API, GROQ API
	5	NPM Packages: Monaco IDE, SocketIO, JS-Cookie, bcrypt, cookie-parser, jsonwebtoken.
	6	………………………….MVP Features, Technical Challenges, and Stretch Features

Database Schema
The database schema for the application is defined using Prisma ORM and is backed by a PostgreSQL database. This schema outlines the structure and relationships of various entities within the application, including users, code groups, files, skills, interests, notifications, and chatbot messages. The schema ensures efficient data management and retrieval, supporting the core functionalities of the application. The data models are:
	1	User: The User model represents the users of the application. It includes fields for user details, relationships to other models, and timestamps for tracking creation and updates.
	2	CodeGroup: The CodeGroup model represents groups of users collaborating on code projects. It includes fields for group details, relationships to users, and preferred attributes.
	3	GroupMember: The GroupMember model represents the association between users and code groups. It includes fields for the group and user IDs, the user who added the member, and timestamps.
	4	File: The File model represents files created and managed within code groups. It includes fields for file details, relationships to the creator and the associated code group, and timestamps.
	5	Skill: The Skill model represents skills that users or code groups possess. It includes fields for the skill details and relationships to users and code groups.
	6	Interest: The Interest model represents interests that users or code groups have. It includes fields for the interest details and relationships to users and code groups.
	7	Notification: The Notification model represents notifications sent to users. It includes fields for the notification message, category, status, related entities (group or file), and timestamps.
	8	NotificationInteractions: The NotificationInteractions model represents user interactions with notifications. It includes fields for the interaction details, user ID, notification ID, and timestamps.
	9	ChatbotMessage: The ChatbotMessage model represents messages exchanged with the chatbot. It includes fields for the message content, type, user ID, and timestamps.
	10	Relationships: Model relationships include:
	1	User and CodeGroup: Users can create and join multiple code groups. Each code group has a creator (user) and multiple members.
	2	User and File: Users can create multiple files within code groups.
	3	User and Skill/Interest: Users can have multiple skills and interests, and these attributes can also be associated with code groups.
	4	Notification and User: Notifications are sent to users, and users can interact with these notifications.
	5	ChatbotMessage and User: Users can exchange messages with the chatbot, which are stored in the database.

User Authentication
Key Components:
	1	auth_controller.js: This file contains the core logic for handling various authentication tasks such as user registration, login, GitHub OAuth authentication, profile updates, and logout
	2	auth_middleware.js: Middleware used to protect routes by verifying the JWT tokens sent in cookies, ensuring that only authenticated users can access certain endpoints.
	3	auth_routes.js: Defines the endpoints related to authentication and maps them to the corresponding controller functions.
	4	Frontend Components: React components that handle the user interface for login, sign-up, and profile management, providing a user-friendly way to interact with the authentication system.
The authentication flow involves:
	1	User Registration: User can create an account. On the frontend, the user inputs their new username, email, full name and password. On submit, the password is hashed with bcrypt, for security. The new use record is then saved in the database. After the user account is created, the user is directed to the Profile setup page where the up builds their profile by selecting their bio, interests, skills and availability. This is then used to update the user’s info in the database.
	1	API Endpoints: /auth/register
	2	Method: POST
	2	Traditional Login: User can login. When a user inputs their username and password and submits a login requests, it takes the inputted password and uses bcrypt to compare it against all the hashed password in the database. If the username is valid and the password is associated to that particular username, the request is approved, a jwt token is generated as a cookie and the user is directed to the home page. If, the user is informed that there is an invalid username or password.
	1	API Endpoint: /auth/login
	2	Method: POST
	3	Login with Github: User can login with Github.  Here, users that have a github account can login directly without having to create an account or login tradoittionally. When the button is clicked, the user is redirected to the Github third-party login page and the user is asked to authorize the request. Upon authorization, the app checks if the user’s username is already in the database. If this is the case, the user is logged in and directed to the homepage. If not, it uses the data from github and creates as account for the user, which tey can update at any time.
	1	API Endpoint 1: /auth/github
	1	Method: GET
	2	API Endpoint 2: /auth/github/callback
	1	Method: GET
	4	Profile View: Users can view their profile and the profile of other members. When a user clicks on their avatar or that of another user, it directs them to the profile page with all their information, include username, email, full name, image URL, interests, skills, availability, code groups, and files created.
	1	API Endpoint: /auth/user/:username/get-user-details
	2	Method:GET
	5	Edit Profile: Users can edit their profile. If the profile clicked is the user’s profile, they would have the option to edit their profile information.
	1	API Endpoint: /auth/user/:username/profile-build
	2	Method: PUT
	6	Logout:  Logs out the user by clearing the JWT token from the cookies and redirects them to the home page.
	1	API Endpoint: /auth/logout
	2	Method: POST

Code Groups
The Code Groups feature enables users to create and manage collaborative groups focused on coding projects. Users can create new groups, add members, update group details, and access group-specific information such as members, files, and activities. This feature fosters collaboration and enhances the productivity of group coding projects.
Key Components
	1	cg_controllers.js: Contains the logic for handling group-related requests such as creating groups, fetching group details, updating group information, and managing group members.
	2	cg_routes.js: Defines the routes related to code groups and maps them to the corresponding controller functions.
	3	Frontend Components: React components for displaying and interacting with code groups.
The code group features include:
	1	Create New Code Group: User can create new groups. To create a code group, the user inputs the group name and  a word that describes the group. This word is then used as the search query for the image generation with the Unsplash API. The group is then created with the group name and image. The user also has the option to add members to the group at the point of creation.
	1	API Endpoint 1: /code-groups/new/code-group
	1	Method: POST
	2	API Endpoint 2: /code-groups/search-for-image
	1	GET
	2	Update Code GRoup Details: User can update code group details.  Updates the details of an existing group, such as the name, image URL, preferred skills, and availability. New members can also be added here.
	1	API Endpoint 1: /code-groups-/group/:groupId/update-code-group
	2	Method: PUT
	3	Get Group Details: Returns the group details or an error message if the group is not found or the user does not have access.
	1	API Endpoint: /code-groups/group/:groupId
	2	Method: GET
	4	Get All Code Groups: This includes both groups the user created and the ones they were added to.
	1	API Endpoint 1: /code-groups/user/created-groups
	1	Method: GET
	2	API Endpoint 2: /code-groups/user/groups-added-to
	1	Method: GET
	5	Frontend Endpoints: The frontend components for code groups provide a user-friendly interface for managing and interacting with code groups. These components handle displaying group information, creating new groups, and updating existing groups.
	•	CodeGroupsList.jsx: Displays a list of code groups that the user is a member of or has created. It provides options to view group details, create new groups, and update existing groups.
	•	Files.jsx: Manages and displays the files associated with a code group. It allows users to upload, view, and manage group files.
	•	Home.jsx: The main dashboard for the application, displaying an overview of the user's groups and activities. It integrates components for listing groups and managing files.

Workstation
The Workstation feature is designed to provide a collaborative coding environment where users can create, edit, and run code files within their code groups. This feature includes file management, code execution, and integration with a chatbot for assistance. The Workstation supports multiple programming languages and offers real-time notifications for file-related activities.
Key Components
	1	ws_controllers.js: Contains the logic for handling workstation-related requests such as creating files, updating files, running code, and managing chatbot interactions.
	2	ws_routes.js: Defines the routes related to the workstation and maps them to the corresponding controller functions.
	3	Frontend Components: React components for displaying and interacting with the workstation, including file management, code editor, and terminal.
The workstation features include:
	1	Create New File: Users can create new files. This takes in a filename input and creates a new file in a specific code group. This is then saved in the database.
	1	API Endpoint: /workstation/:groupId/create-new-file
	2	Method: POST
	2	Get File Details
	3	Update File:
	4	Delete File
	5	Download File:
	6	Run Code:
	7	Chatbot Interaction:
	8	Save Chatbot Message:
	9	Get Chatbot Message:


Notification
User Recommendation
AI Chatbot

API Documentation
Development Guide





	1	Architecture
	◦	Overview
	◦	Components
	◦	Data Flow
	2	Database Schema
	◦	Database Design
	◦	Models (User, File, Peer, CodeGroup, GroupMember)
	3	API Documentation
	◦	Endpoints
	◦	Authentication
	4	Development Guide
	◦	Setting Up Development Environment
	◦	Code Style Guidelines
	◦	Testing
	◦	Deployment
	5	References
	◦	Related Projects
	◦	External Resources




