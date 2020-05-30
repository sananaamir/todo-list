from flask import (request, render_template)
from todolist import (app, db)
from .models import TodoModel

@app.route('/')
def index():
    return {
        "message": "Hello, dude!"
    }
@app.route('/api/todos', methods=['POST', 'GET'])
def get_or_insert_todo():
    if request.method == 'POST':
        if request.is_json:
            data = request.get_json()
            new_todo = TodoModel(todo_text=data["todo_text"])
            db.session.add(new_todo)
            db.session.commit()
            return {"message": f"todo {new_todo.todo_text} has been created successfully."}
        else:
            return {"error": "The request payload is not in JSON format"}
    elif request.method == 'GET':
        todos = TodoModel.query.all()
        results = [
            {
                "id": todo.id,
                "todo_text": todo.todo_text,
                "is_completed": todo.is_completed,
            } for todo in todos]

        return {"count": len(results), "todos": results}