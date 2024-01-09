# Contacts Book

Contacts Book is a web-based application built using Python Flask for the backend, PostgreSQL for the database, and a front-end stack that includes Bootstrap and JavaScript. The application allows users to register and log in using their email and password, storing the user information securely in a PostgreSQL database. Users can manage their contacts by adding, updating, and deleting entries.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication: Register and log in securely using email and password.
- Local Storage: User information is stored locally for a seamless login experience.
- Contact Management: Add, update, and delete contacts easily.
- Responsive Dashboard: The user interface is designed using Bootstrap for a responsive and visually appealing experience.
- Backend-Frontend Interaction: The backend is powered by Python Flask, and the frontend leverages JavaScript for a dynamic user interface.

## Setup

To set up the Contacts Book project locally, follow these steps:

### Prerequisites

- Python 3.x
- PostgreSQL
- pip (Python package installer)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/dev-diegov/Contacts_book.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Contacts_book
    ```

3. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Set up the database:

    - Create a PostgreSQL database and update the `DATABASE_URL` in the `.env` file with your database connection details.

    ```env
    DATABASE_URL=postgresql://your_username:your_password@localhost:5432/your_database
    ```

    - Initialize the database schema:

    ```bash
    flask db init
    flask db migrate
    flask db upgrade
    ```

## Usage

1. Run the Flask application:

    ```bash
    flask run
    ```

2. Open your web browser and navigate to [http://localhost:5000](http://localhost:5000).

3. Register or log in to your account.

4. Use the dashboard to manage your contacts.

## Contributing

Contributions are welcome! Please follow the [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
