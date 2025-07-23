 // script.js

// 🔍 Preview selected image in upload.html
function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function () {
        const output = document.getElementById('preview');
        output.src = reader.result;
        output.style.display = 'block';
    };
    reader.readAsDataURL(event.target.files[0]);
}

// ✅ Show success alert after form submit
function showSuccess(message) {
    alert(message || "Form submitted successfully!");
}

// 🧾 Dummy validation function
function validateLogin() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    if (!email || !pass) {
        alert("Please enter email and password!");
        return false;
    }
    return true;
}

