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
    - GET /getContacts?user_id=1&field=ID&order=ASC

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