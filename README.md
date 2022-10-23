# Social-Network-API

## Description

This is a Social Network API made by Hiu Sum Jaime Yue.  
In this Social Network API, it allows you to read, create, update and delete data of User and Thought.  
When you run this Social Network API, you can open the API GET, POST, PUT and DELETE routes
of User and Thought. Thoughts and friends are also included in User model. Thought model includes its reaction of users.

The technologies I used in this project are Express.js, Mongoose and NoSQL.

Below are the links to this repository and the video of demostration.  
Github repository: https://github.com/HiuSumJaimeYue/Social-Network-API  
Video of demonstration: https://youtu.be/2qnpnLAY67w

## Table of Contents

-[Installation](#installation)  
-[Usage](#usage)  
-[License](#license)  
-[Contributing](#contributing)  
-[Tests](#tests)  
-[Questions](#questions)

## Installation

If you are setting the project up in your local computer, run "npm i" in your terminal after downloading the files. To start the project, type "npm start" in the terminal. After seeing "🌍 Connected on localhost:3001" in the terminal, open Insomnia and start your changes.

## Usage

Requests: Read -- GET, Create -- POST, change/update -- PUT, delete -- DELETE

You can read and create all Users and Thoughts.  
You can read or change or delete a User and Thought using the Id at the end of the route.  
An example of HTTP request URL for User and Thought is in the Tests Section, including an example for using the Id at the end of the route.  
You can add an existing User as a friend for User and delete a friend in User.  
An example of HTTP request URL that you can put in the body for adding an existing User as a friend for User and deleting a friend in User is in the Tests Section.    
You can add a new reaction for Thought.  
An example of HTTP request URL that you can put in the body for adding a new reaction for Thought is in the Tests Section.  
You can delete a new reaction in Thought.  
An example of HTTP request URL that you can put in the body for deleting a new reaction in Thought is in the Tests Section.  
An example of JSON that you can put in the body for User, Thought and Reaction is in the Tests Section.

## License

&copy; 2022 by Hiu Sum Jaime Yue

## Contributing

Hiu Sum Jaime Yue -- Social Network API

## Tests

The following is an example of HTTP request URL for User and Thought respectively.  
User: <localhost:3001/api/users>  
Thought: <localhost:3001/api/thoughts>

The following is an example of HTTP request URL for User or Thought using user id at the end of the route.                  
localhost:3001/api/users/:id            
<localhost:3001/api/users/63550f17229936976dc51c29>               

The following is an example of HTTP request URL for adding an existing User as a friend for User or deleting a friend in User.            
localhost:3001/api/users/:userId/friends/:friendId              
<localhost:3001/api/users/6355162bc13a105ac8ae8a4e/friends/6355167cc13a105ac8ae8a56>             


The following is an example of HTTP request URL for adding a new reaction for Thought.              
localhost:3001//api/thoughts/<thoughtId>/reactions          
<localhost:3001/api/thoughts/63550a8c6c81d0ba1db69609/reactions>

The following is an example of HTTP request URL for deleting a new reaction in Thought.         
localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId            
<localhost:3001/api/thoughts/635516b4c13a105ac8ae8a5f/reactions/63551730c13a105ac8ae8a78>


The following is an example of JSON that you can put in the body for creating or updating a User.  
`{ "username": "User12", "email": "user12@gmail.com" }`

The following is an example of JSON that you can put in the body for creating or updating a Thought.  
`{ "thoughtText": "TextHere", "username": "User12", "userId": "6355162bc13a105ac8ae8a4e" }`

The following is an example of JSON that you can put in the body for creating a Reaction .  
`{ "reactionBody": "Reaction 1", "username": "User345" }`

## Questions

If you have any questions about the project,
the GitHub link and email address of the author are shown below.  
GitHub: [GitHub](https://github.com/HiuSumJaimeYue)
& Email: [hiusumjaimeyue@cmail.carleton.ca](mailto:hiusumjaimeyue@cmail.carleton.ca)
