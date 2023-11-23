import datetime

class User():
    id: int
    name: str
    last_name: str
    email: str
    password: str

    def __repr__(self) -> str:
        return f'<User(id={self.id}, name={self.name}, last_name={self.last_name}, email={self.email}, password={self.password})'

class Contact():
    id: int
    name: str
    last_name: str
    address: str
    email: str
    phone_number: str
    creation_date: datetime