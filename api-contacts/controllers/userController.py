from db import connect
from models import User

def selectUser(email, password):
    id = 0
    try:
        session = connect()
        users = session.query(User).filter(User.email == email, User.password == password).all()
        if len(users) > 0:
            id = users[0].id
    except Exception as e:
        print(e)
    finally:
        session.close()
    return id