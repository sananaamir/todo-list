from flask import render_template
from todolist import app

@app.route('/')
def test():
    return render_template("index.html")