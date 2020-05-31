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

class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    first_name = db.Column(db.String(1000))
    last_name = db.Column(db.String(1000))

    def is_active(self):
        # all users are active
        return True 

    def get_id(self):
        # returns the user e-mail
        return self.id

    def is_anonymous(self):
        # False as we do not support annonymity
        return False
    
    def is_authenticated(self):
        return True
