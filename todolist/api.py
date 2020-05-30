from flask import render_template
from todolist import app

@app.route('/test')
def test():
    return render_template("index.html")