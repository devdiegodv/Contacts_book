from flask import Flask, jsonify, request, Blueprint
from models import User
from db import connect

user_api = Blueprint('user_api', __name__)

@user_api.route('/user', methods= ['GET'])
def user():
    try:
        session = connect()
        users = session.query(User).all()
        print(users)
    except:
        print('The user could not connect to the database')
    finally:
        session.close()
        