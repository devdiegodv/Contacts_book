from flask import Flask, jsonify, request, Blueprint
from models import User
from db import connect

import controllers.userController as userController

user_api = Blueprint('user_api', __name__)

@user_api.route('/user', methods= ['GET'])
def getUser():
    parameters = request.args
    print("esto es request data -> ", request.data)
    print("esto es parameters -> ", parameters)
    email = parameters['email']
    password = parameters['password']
    result = userController.selectUser(email, password)
    return jsonify({'result': result})