from flask import Flask
from os.path import join, dirname, exists
from dotenv import load_dotenv
import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

app = Flask(__name__)

# Load environment file from .env, if it exists
dotenv_path = join(dirname(__file__), '../.env')

if exists(dotenv_path):
    print("Loading configuration from .env...")
    load_dotenv(dotenv_path)
else:
    print("No configuration file located at .env, skipping.")

# Disable static file caching
app.config['SECRET_KEY'] = '9OLWxND4o83j4K4iuopO'
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
db = SQLAlchemy(app)
migrate = Migrate(app, db)

login_manager = LoginManager()
login_manager.login_view = 'auth.login'
login_manager.init_app(app)

import todolist.models
import todolist.views
import todolist.api

@login_manager.user_loader
def load_user(user_id):
    # since the user_id is just the primary key of our user table, use it in the query for the user
    return models.User.query.get(int(user_id))