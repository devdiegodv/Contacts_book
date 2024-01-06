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