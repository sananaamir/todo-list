from flask import render_template
from todolist import app

@app.route('/')
def index():
    return {
        "message": "Hello, dude!"
    }