from datetime import datetime
from dataclasses import dataclass
from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()

@dataclass
class User(Base):
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

    __tablename__ = 'user_app'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)

    def __repr__(self) -> str:
        """
        Returns a string representation of the User object.

        Returns:
        str: A formatted string containing user information.
        """
        return f'<User(id={self.id}, name={self.name}, last_name={self.last_name}, email={self.email}, password={self.password})>'

@dataclass
class Contact(Base):
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

    today_date = datetime.today()

    __tablename__ = 'contact'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    address = Column(String, nullable=False)
    email = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    creation_date = Column(DateTime, default=datetime.today().date())

    def __repr__(self) -> str:
        """
        Returns a string representation of the Contact object.

        Returns:
        str: A formatted string containing contact information.
        """
        return f'<Contact(id={self.id}, name={self.name}, last_name={self.last_name}, address={self.address}, email={self.email}, phone_number={self.phone_number}, creation_date={self.creation_date})>'

@dataclass    
class BelongsTo(Base):
    """
    A class representing the association between users and contacts.

    Attributes:
    - id (int): BelongsTo's unique identifier.
    - user_app_id (int): User's unique identifier.
    - contact_id (int): Contact's unique identifier.
    """
    id: int
    user_app_id: int
    contact_id: int

    __tablename__ = 'belongsto'
    id = Column(Integer, primary_key=True)
    user_app_id = Column(Integer, nullable=False)
    contact_id = Column(Integer, nullable=False)