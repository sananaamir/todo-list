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
        todos = TodoModel.query.filter(TodoModel.is_completed == False).all()
        results = [
            {
                "id": todo.id,
                "todo_text": todo.todo_text,
                "is_completed": todo.is_completed,
            } for todo in todos]

        return {"count": len(results), "todos": results}

@app.route('/api/todos/<int:todo_id>', methods=['PATCH', 'DELETE'])
def update_or_delete_todo(todo_id):
    data = request.get_json()
    if request.method == 'PATCH':
        db.session.query(TodoModel).filter(TodoModel.id == todo_id).update({
            TodoModel.todo_text: data["todo_text"],
            TodoModel.is_completed: data["is_completed"]
        })
        db.session.commit()

        todos = TodoModel.query.filter(TodoModel.is_completed == False).all()
        results = [
            {
                "id": todo.id,
                "todo_text": todo.todo_text,
                "is_completed": todo.is_completed,
            } for todo in todos]

        return {"count": len(results), "todos": results}

    elif request.method == 'DELETE':
        db.session.query(TodoModel).filter(TodoModel.id == todo_id).delete()
        db.session.commit()

        todos = TodoModel.query.filter(TodoModel.is_completed == False).all()
        results = [
            {
                "id": todo.id,
                "todo_text": todo.todo_text,
                "is_completed": todo.is_completed,
            } for todo in todos]

        return {"count": len(results), "todos": results}