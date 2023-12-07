from flask import Flask, jsonify, request, Blueprint
import controllers.contactController as contactController

contact_api = Blueprint('contact_api', __name__)

@contact_api.route('/contacts', methods = ['GET'])
def getContacts():
    """
    Endpoint to retrieve contacts based on specified parameters.

    HTTP Method:
    - GET

    Request Parameters:
    - user_id (int): The unique identifier of the user whose contacts are to be retrieved.
    - field (str): The field by which contacts should be sorted ('ID' or 'NAME').
    - order (str): The order in which contacts should be sorted ('ASC' for ascending, 'DESC' for descending).

    Returns:
    - JSON response containing the list of contacts based on the specified parameters.

    Example Usage:
    - GET /Contacts?user_id=1&field=ID&order=ASC

    Example Response:
    - [{'id': 1, 'name': 'John Doe', 'email': 'john@example.com'}, ...]

    Note:
    - The actual response structure may vary based on the implementation of contactController.selectContacts.
    """
    parameters = request.args
    user_id = parameters['user_id']
    field = parameters['field']
    order = parameters['order']
    contacts = contactController.selectContacts(user_id, field, order)

    return jsonify(contacts)

@contact_api.route('/contact', methods = ['GET'])
def getContact():
    """
    Endpoint to retrieve a specific contact based on the provided contact ID.

    HTTP Method:
    - GET

    Request Parameters:
    - contact_id (int): The unique identifier of the contact to be retrieved.

    Returns:
    - JSON response containing the contact information if found, or an empty JSON object if the contact is not found.

    Example Usage:
    - GET /Contact?contact_id=1

    Example Response:
    - {'id': 1, 'name': 'John Doe', 'email': 'john@example.com'}

    Note:
    - The actual response structure may vary based on the implementation of contactController.selectContact.
    """
    parameters = request.args
    contact_id = parameters['contact_id']
    contact = contactController.selectContact(contact_id)

    return jsonify(contact)

@contact_api.route('/contactStr', methods = ['GET'])
def getContactStr():
    """
    Endpoint to search for contacts based on a provided search value and user ID.

    HTTP Method:
    - GET

    Request Parameters:
    - user_id (int): The unique identifier of the user for whom contacts are searched.
    - value (str): The search value to be matched against contact names, last names, addresses, and emails.

    Returns:
    - JSON response containing a list of contacts that match the search criteria.

    Example Usage:
    - GET /contactStr?user_id=1&value=John

    Example Response:
    - [{'id': 1, 'name': 'John Doe', 'last_name': 'Smith', 'address': '123 Main St', 'email': 'john@example.com'}, ...]

    Note:
    - The actual response structure may vary based on the implementation of contactController.search_contacts.
    """
    parameters = request.args
    user_id = parameters['user_id']
    value = parameters['value']
    contacts = contactController.search_contacts(user_id, value)

    return jsonify(contacts)

@contact_api.route('/contactInsert', methods = ['GET', 'POST'])
def insertContact():
    """
    Endpoint to insert a new contact into the system.

    Method:
    - GET: Retrieves information from the request parameters.
    - POST: Accepts information in the request body.

    Parameters (for both methods):
    - user_id (str): Identifier for the user associated with the contact.
    - name (str): First name of the contact.
    - last_name (str): Last name of the contact.
    - address (str): Address information of the contact.
    - email (str): Email address of the contact.
    - phone_number (str): Phone number of the contact.

    Returns:
    - JSON response indicating the result of the insertion.

    Example Usage:
    - GET: /contactInsert?user_id=123&name=John&last_name=Doe&address=123 Main St&email=john.doe@example.com&phone_number=555-1234

    Example Response:
    {
        "result": "True"
    }
    """
    parameters = request.args
    user_id = parameters['user_id']
    name = parameters['name']
    last_name = parameters['last_name']
    address = parameters['address']
    email = parameters['email']
    phone_number = parameters['phone_number']

    result = contactController.insertContact(user_id, name, last_name, address, email, phone_number)

    return jsonify({'result': result})