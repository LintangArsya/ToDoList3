document.getElementById("registerform").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const registerbutton = document.querySelector("#register-button")

    registerbutton.onclick =() =>{
        localStorage.setItem("username", username.value)
        localStorage.setItem("password", password.value)

        alert("Anda Berhasil Registrasi")
        window.location.href = "index2.html"

        console.log("User registered");
        console.log(eachUser);
    }
})