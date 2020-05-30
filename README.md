# React Flask Boilerplate
This project is a React and Flask boilerplate. The project has handled the initial bootstrapping and config so that developers (specially new ones) can quickly get started on solving their actual problems rather than figuring out how to setup a full-stack application.

### Few other benfits of this boilerplate:
- Material-UI included so that the developer doesn't have to worry about the initial UI dependencies.
- Boilerplate is all setup to be easily deployed to Heroku without any further configurations needed!

### How to run the app:
#### Get the frontend up and running:
- Change directory to ```frontend```
- Type and enter ```yarn run watch``` to actively watch for changes in the frontend. 

#### Get the backend up and running:
- Stay in the root directory
- Type and enter ```flask run``` to start the backend app.
- Go to the URL printed in the console to see the app in action!

Feel free to open issues, request new features or point out improvements in documentation! Happy Hacking!


### Heroku & Migrations Notes:
- Local migrations workflow:
    - flask db init (If db does not exist)
    - flask db migrate
    - flask db upgrade
- Set FLASK_APP & FLASK_ENV in heroku and local env to get the migrations to run:
    - ALWAYS set the app flag for heroku commands using -a app_name
- To run migrations on heroku: heroku run flask db upgrade