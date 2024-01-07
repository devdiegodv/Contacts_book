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

function operate(){
    let op = sessionStorage.getItem("op");

    if (op == "edit"){
        edit_contact();
    }
}

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