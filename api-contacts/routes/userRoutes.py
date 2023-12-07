from flask import Flask, jsonify, request, Blueprint
from models import User
from db import connect

import controllers.userController as userController

user_api = Blueprint('user_api', __name__)

@user_api.route('/user', methods= ['GET'])
def getUser():
    """
    Endpoint to retrieve user information based on provided email and password.

    HTTP Method:
    - GET

    Request Parameters:
    - email (str): The email address of the user.
    - password (str): The password associated with the user's account.

    Returns:
    - JSON response containing the result of the user retrieval operation.
      The result includes the user information if found, or a default result if not found.

    Example Usage:
    - GET /user?email=user@example.com&password=secretpassword

    Example Response:
    - {'result': 1}  # Where 1 is the user ID, or 0 if the user is not found.
    """
    parameters = request.args
    email = parameters['email']
    password = parameters['password']
    result = userController.selectUser(email, password)
    return jsonify({'result': result})