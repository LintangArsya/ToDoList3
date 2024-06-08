document.getElementById("loginform").addEventListener("submit", (event) => {
    event.preventDefault()
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const loginbutton = document.querySelector("#login-button")

    const storedUsername = localStorage.getItem("username")
    const storedPassword = localStorage.getItem("password")

    loginbutton.onclick = () => {
        console.log("logged in");
        if (username.value === storedUsername && password.value === storedPassword){
            alert(`Login Anda Sukses, Selamat Datang ${username.value}  !`)
            window.location.href = "index3.html"
        }else{
            alert("Akun Anda Tidak Terdaftar, Harap Coba Lagi")
        }
    }
    
})