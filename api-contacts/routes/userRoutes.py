from flask import Flask, jsonify, request, Blueprint

user_api = Blueprint('user_api', __name__)

@user_api.route('/user', methods= ['GET'])
def user():
    return 'Blueprint working'