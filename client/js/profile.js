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
}