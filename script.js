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

async function checkLogin() {
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ password: inputPassword })
        });

        const data = await response.json();
        if (data.success) {
            alert("Login berhasil!");
            // Redirect ke dashboard
        } else {
            alert("Password salah!");
            clearInput();
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
