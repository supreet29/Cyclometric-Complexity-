# Cyclometric-Complexity

This project is to implement the RESTful services to comute the code complexity of the given repository and present in the graph as a return result. 

These are the following steps to be followed in order to run the project :

    1. Install npm
    2. Install nodemon
    3. Install Curl 
    4. Install nvm
    
Project structure is as follows:

    1. Artifacts-> plato -> files (which contain report history and the html result of the cyclomatic complexity of the given code)
    2. Node_modules (contains all the plugins required to build the api)
    3. Output folder contains all the responses form the api
    4. Views folder is used to store the ui files
    5. Package.json contains list of dependencies
    6. Server.js contains api logic
    7. Server.js

It have following node dependencies:

    1. express
    2. body-parser
    3. ejs
    4. es6-plato( node module to generate cyclomatic complexity graph)
    5. github   (node module which helps to create a connection between node api and github this requires clientId, oauth token from GitHub account of the user)

