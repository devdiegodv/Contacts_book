import datetime

class User():
    """
    A class representing a user with basic information.

    Attributes:
    - id (int): User's unique identifier.
    - name (str): User's first name.
    - last_name (str): User's last name.
    - email (str): User's email address.
    - password (str): User's password.

    Methods:
    - __repr__(): Returns a string representation of the User object.
    """
    id: int
    name: str
    last_name: str
    email: str
    password: str

    def __repr__(self) -> str:
        """
        Returns a string representation of the User object.

        Returns:
        str: A formatted string containing user information.
        """
        return f'<User(id={self.id}, name={self.name}, last_name={self.last_name}, email={self.email}, password={self.password})'

class Contact():
    """
    A class representing a contact with basic information.

    Attributes:
    - id (int): Contact's unique identifier.
    - name (str): Contact's first name.
    - last_name (str): Contact's last name.
    - address (str): Contact's address.
    - email (str): Contact's email address.
    - phone_number (str): Contact's phone number.
    - creation_date (datetime): Contact's creation date.
    """
    id: int
    name: str
    last_name: str
    address: str
    email: str
    phone_number: str
    creation_date: datetime