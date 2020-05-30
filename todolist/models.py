from todolist import (app, db)

class TodoModel(db.Model):
    __tablename__ = 'todo'

    id = db.Column(db.Integer, primary_key=True)
    todo_text = db.Column(db.String())
    is_completed = db.Column(db.Boolean(), default=False)

    def __init__(self, todo_text):
        self.todo_text = todo_text
        self.is_completed = False

    def __repr__(self):
        return f"<Todo {self.todo_text}>"