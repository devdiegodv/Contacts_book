/**
 * This function is executed when the window has finished loading. It initializes the table with contacts,
 * sets up click event listeners for sorting by name and searching contacts by name.
 */
window.onload = function(){
    loadTable("ID", "ASC")

    // Setting up the click event listener for sorting by name
    let order_name = document.getElementById("order_name")
    order_name.addEventListener("click", order_contacts_name);

    // Setting up the input event listener for searching contacts
    let search = document.getElementById("search");
    search.addEventListener("input", search_contact);
}

/**
 * Loads the contact table based on the specified field and order.
 * @param {string} field - The field by which to sort the contacts (e.g., "ID", "NAME").
 * @param {string} order - The order of sorting ("ASC" for ascending, "DESC" for descending).
 */
function loadTable(field, order){
    let id = localStorage.getItem("id")
    let url = "http://127.0.0.1:5000/contacts?user_id="+id+"&field="+field+"&order="+order;

    fetch(url, {
        method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
        load_data_table(res)
    })
}

/**
 * Populates the HTML table with contact data.
 * @param {Object[]} res - An array of contact objects retrieved from the server.
 */
function load_data_table(res){
    let table = document.getElementById("body-table")
    table.innerHTML = "";

    for (let i=0; i<res.length; i++){
        let tr = document.createElement("tr")
        // Creating table cells for each contact property
        let col1 = document.createElement("td")
        col1.innerHTML = res[i].id;

        let col2 = document.createElement("td")
        col2.innerHTML = res[i].name

        let col3 = document.createElement("td")
        col3.innerHTML = res[i].last_name

        let col4 = document.createElement("td")
        col4.innerHTML = res[i].address

        let col5 = document.createElement("td")
        col5.innerHTML = res[i].phone_number

        let col6 = document.createElement("td")
        col6.innerHTML = res[i].email

        let col7 = document.createElement("td")
        col7.innerHTML = res[i].creation_date

        let col8 = document.createElement("td")
        col8.innerHTML = '<button onclick="edit_contact('+res[i].id+')" style="cursor: pointer"><i class="fa fa-pen"></i></button>'

        let col9 = document.createElement("td")
        col9.innerHTML = '<button onclick="delete_contact('+res[i].id+')" style="cursor: pointer"><i class="fa fa-trash"></i></button>'

        // Appending cells to the table row
        table.appendChild(tr)
        tr.appendChild(col1)
        tr.appendChild(col2)
        tr.appendChild(col3)
        tr.appendChild(col4)
        tr.appendChild(col5)
        tr.appendChild(col6)
        tr.appendChild(col7)
        tr.appendChild(col8)
        tr.appendChild(col9)
    }   
}

/**
 * Initiates the contact deletion process by displaying a confirmation dialog.
 * @param {number} id - The ID of the contact to be deleted.
 */
function delete_contact(id){
    Swal.fire({
        title: 'The contact will be deleted, do you want to continue?',
        showCancelButton: true,
        confirmButtonText: 'OK',
    }). then((result) => {
        if (result.isConfirmed){
            delete_id(id);
        }
    })
}

/**
 * Sends a request to the server to delete the specified contact.
 * @param {number} contact_id - The ID of the contact to be deleted.
 */
function delete_id(contact_id) {
    let user_id = localStorage.getItem("id");
    let url = "http://127.0.0.1:5000/deleteContact?user_id=" + user_id + "&contact_id=" + contact_id;

    fetch(url, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(res => {
        if (res.result != false) {
            swal.fire("Delete", "Contact has been deleted successfully", "success")
            .then(() => {
                location.reload();
            });
        } else {
            swal.fire("Delete", "Error, the contact can't be deleted", "error");
        }
    })
    .catch(error => {
        console.error('Error deleting contact:', error);
        swal.fire("Error", "An error occurred while deleting the contact", "error");
    });
}

/**
 * Handles the sorting of contacts by name in ascending or descending order.
 */
function order_contacts_name(){
    let order_name = document.getElementById("order_name")

    if (order_name.classList.contains("fa-sort")){
        loadTable("NAME", "ASC");
        order_name.classList.remove("fa-sort");
        order_name.classList.add("fa-sort-down");
    }
    else if(order_name.classList.contains("fa-sort-down")){
        loadTable("NAME", "DESC");
        order_name.classList.remove("fa-sort-down");
        order_name.classList.add("fa-sort-up");
    }
    else if(order_name.classList.contains("fa-sort-up")){
        console.log("test")
        loadTable("ID", "ASC");
        order_name.classList.remove("fa-sort-up")
        order_name.classList.add("fa-sort");
    }
}

/**
 * Handles searching contacts based on the entered value.
 */
function search_contact(){
    let id = localStorage.getItem("id");
    let value = document.getElementById("search").value;

    let url = "http://127.0.0.1:5000/contactStr?user_id="+id+"&value="+value;

    fetch(url, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(res => {
        load_data_table(res);
    })
}

/**
 * create_contact - Function to set the operation as "new" in sessionStorage
 * and navigate to the profile.html page for creating a new contact.
 */
function create_contact(){
    sessionStorage.setItem("op", "new");
    location.href = "profile.html";
}

/**
 * edit_contact - Function to set the operation as "edit" and store the contact_id
 * in sessionStorage, then navigate to the profile.html page for editing a contact.
 *
 * @param {string} id - The unique identifier of the contact to be edited.
 */
function edit_contact(id){
    sessionStorage.setItem("op", "edit");
    sessionStorage.setItem("contact_id", id);
    location.href = "profile.html";
}