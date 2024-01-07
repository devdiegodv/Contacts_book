/**
 * This function is responsible for handling user login by sending a request to the server with
 * the provided email and password. It utilizes the Fetch API to make an asynchronous HTTP GET request.
 * Upon receiving the response from the server, it checks if the login credentials are valid.
 * If valid, it stores the user ID in the local storage and redirects the user to the "main.html" page.
 * If invalid, it displays an error message using the Swal (SweetAlert) library.
 */
function send(){
    // Retrieving the user's email and password from the input fields
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Constructing the URL for the user authentication endpoint
    let url = "http://127.0.0.1:5000/user?email="+email+"&password="+password;

    // Making an HTTP GET request to the server's user authentication endpoint
    fetch(url, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(res =>{
        if (res.result != 0){
            // Storing the user ID in the local storage for future reference
            localStorage.setItem("id", res.result);
            console.log("TESTING")
            location.href = "main.html";
        }
        else{
            Swal.fire(
                'Login',
                'Credentials are invalid',
                'error'
            )
        }
    });
}