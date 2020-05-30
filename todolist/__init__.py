from flask import Flask
from os.path import join, dirname, exists
from dotenv import load_dotenv
import os
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

# Load environment file from .env, if it exists
dotenv_path = join(dirname(__file__), '../.env')

if exists(dotenv_path):
    print("Loading configuration from .env...")
    load_dotenv(dotenv_path)
else:
    print("No configuration file located at .env, skipping.")

# Disable static file caching
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv("DATABASE_URL")
db = SQLAlchemy(app)
migrate = Migrate(app, db)

import todolist.models
import todolist.views
import todolist.api