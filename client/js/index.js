function send(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let url = "http://127.0.0.1:5000/user?email="+email+"&password="+password;

    fetch(url, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(res =>{
        if (res.result != 0){
            location.href = "main.html"
        }
        else{
            alert("User data is invalid")
        }
    });
}