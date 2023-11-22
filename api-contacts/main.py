from flask import Flask, jsonify, request

# defining a flask application
app = Flask(__name__)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
    if app.run == True:
        print('app running')