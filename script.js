let inputPassword = "";
function press(num) {
    if (inputPassword.length < 6) {
        inputPassword += num;
        document.getElementById("password").value = "*".repeat(inputPassword.length);
    }
}
function clearInput() {
    inputPassword = "";
    document.getElementById("password").value = "";
}
function checkLogin() {
    let correctPassword = "1234"; // Ubah sesuai kebutuhan
    if (inputPassword === correctPassword) {
        window.location.href = "dashboard.html"; // Pindah ke halaman utama setelah login
    } else {
        alert("Password salah!");
        clearInput();
    }
}
