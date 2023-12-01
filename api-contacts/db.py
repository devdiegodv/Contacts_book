from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URI = 'postgresql://postgres:pass@localhost:5432/agenda'

def connect():
    engine = create_engine(DATABASE_URI)
    Session = sessionmaker(bin=engine)

    s = Session()

    if s != None:
        print('Connected to the database')
    else:
        print('Error. No connected to the database')
        
    return s