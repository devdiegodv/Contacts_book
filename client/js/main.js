window.onload = function(){
    loadTable("ID", "ASC")

    let order_name = document.getElementById("order_name")
    order_name.addEventListener("click", order_contacts_name);
}

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

function load_data_table(res){
    let table = document.getElementById("body-table")
    table.innerHTML = "";

    for (let i=0; i<res.length; i++){
        let tr = document.createElement("tr")
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
        col8.innerHTML = '<button style="cursor: pointer"><i class="fa fa-pen"></i></button>'

        let col9 = document.createElement("td")
        col9.innerHTML = '<button onclick="delete_contact('+res[i].id+')" style="cursor: pointer"><i class="fa fa-trash"></i></button>'

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