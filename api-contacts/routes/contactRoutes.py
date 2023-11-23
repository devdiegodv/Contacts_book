from flask import Flask, jsonify, request, Blueprint

contact_api = Blueprint('contact_api', __name__)