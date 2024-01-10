from flask import Flask, jsonify, request
from flask_cors import CORS
from routes.userRoutes import user_api
from routes.contactRoutes import contact_api

# defining a flask application
app = Flask(__name__)
CORS(app) # avoid CORS problem

app.register_blueprint(user_api)
app.register_blueprint(contact_api)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
