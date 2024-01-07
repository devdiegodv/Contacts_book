/**
 * This function is executed when the window has finished loading. It checks the operation type
 * stored in sessionStorage ('edit' or 'create') and adjusts the page content accordingly.
 * If the operation is 'edit', it sets the button text to "Edit contact" and loads the data of the
 * specified contact for editing. If the operation is 'create', it hides the contact ID input field
 * and sets the button text to "Create contact".
 */
window.onload = function(){
    let op = sessionStorage.getItem("op");
    let contact_id = sessionStorage.getItem("contact_id");

    if (op == "edit"){
        document.getElementById("button").innerText = "Edit contact";
        loadData(contact_id);
    }
    else{
        document.getElementById("block_id").style.display = "none";
        document.getElementById("button").innerText = "Create contact";
    }
}

/**
 * This function loads contact data for editing by making an HTTP GET request to the server.
 * It populates the input fields on the page with the retrieved data.
 * @param {number} contact_id - The ID of the contact to be loaded for editing.
 */
function loadData(contact_id){

    let url = "http://127.0.0.1:5000/contact?contact_id="+contact_id;

    fetch(url, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
        document.getElementById("id").value = res.id;
        document.getElementById("name").value = res.name;
        document.getElementById("last_name").value = res.last_name;
        document.getElementById("address").value = res.address;
        document.getElementById("email").value = res.email;
        document.getElementById("phone_number").value = res.phone_number;
    })
}

/**
 * This function is called when the button is clicked. It checks the operation type ('edit' or 'create')
 * stored in sessionStorage and performs the corresponding operation.
 */
function operate(){
    let op = sessionStorage.getItem("op");

    if (op == "edit"){
        edit_contact();
    }else{
        create_contact();
    }
}

/**
 * Displays a confirmation dialog before proceeding with the contact edit operation.
 */
function edit_contact(){
    Swal.fire({
        title: "The contact will be edited, do you want to continue?",
        showCancelButton: true,
        confirmButtonText: "OK",
    }).then((result => {
        if(result.isConfirmed){
            edit();
        }
    }))
}

/**
 * Sends an HTTP PUT request to the server to update the contact with the edited information.
 * Displays success or error messages based on the server response.
 */
function edit(){
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let phone_number = document.getElementById("phone_number").value;

    let url = "http://127.0.0.1:5000/updateContact?id="+id+"&name="+name+"&last_name="+last_name+"&address="+address+"&email="+email+"&phone_number="+phone_number;

    fetch(url, {
        method: 'PUT'
    })
    .then(res => res.json())
    .then(res => {
        if (res.result != false){
            swal.fire("Edit", "Contact has been edited successfully", "success")
            .then(() => {
                sessionStorage.clear();
                location.href = "main.html";
            })
        }else{
            swal("Edit", "Error, the contact couldn't be edited", "error");
        }
    })

}

/**
 * Displays a confirmation dialog before proceeding with the contact creation operation.
 * If the user confirms, it calls the create function to initiate the creation process.
 */
function create_contact(){
    Swal.fire({
        title: "The contact will be created, do you want to continue?",
        showCancelButton: true,
        confirmButtonText: "OK",
    }).then((result => {
        if(result.isConfirmed){
            create();
        }
    }))
}

/**
 * Initiates the process of creating a new contact by sending an HTTP POST request to the server.
 * Retrieves user input for the new contact and communicates with the server to insert the contact.
 * Displays success or error messages based on the server response.
 */
function create(){
    let user_id = localStorage.getItem("id");
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let phone_number = document.getElementById("phone_number").value;

    let url = "http://127.0.0.1:5000/insertContact?user_id="+user_id+"&name="+name+"&last_name="+last_name+"&address="+address+"&email="+email+"&phone_number="+phone_number;

    fetch(url, {
        method: 'POST'
    })
    .then(res => res.json())
    .then(res => {
        if (res.result != false){
            swal.fire("Create", "Contact has been created successfully", "success")
            .then(() => {
                sessionStorage.clear();
                location.href = "main.html";
            })
        }else{
            swal("Create", "Error, the contact couldn't be created", "error");
        }
    })
}