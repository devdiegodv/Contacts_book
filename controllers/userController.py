from db import connect
from models import User

def selectUser(email, password):
    """
    Retrieve the ID of a user based on the provided email and password.

    Parameters:
    - email (str): The email address of the user.
    - password (str): The password associated with the user's account.

    Returns:
    - id (int): The ID of the user, or 0 if the user is not found.
    """
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