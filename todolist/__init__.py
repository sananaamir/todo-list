from flask import Flask

app = Flask(__name__)

# Disable static file caching
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0

import todolist.views
import todolist.api