from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URI = "postgresql://contacts_db_g4tp_user:xQCiRv238x1CzgLvBC5ps8lTXw4xXv4k@dpg-cms0bagl6cac73d64e00-a.oregon-postgres.render.com/contacts_db_g4tp"


def connect():
    engine = create_engine(DATABASE_URI)
    Session = sessionmaker(bind=engine)

    s = Session()

    if s != None:
        print('Connected to the database')
    else:
        print('Error. No connected to the database')
        
    return s