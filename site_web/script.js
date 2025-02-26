// Generate CAPTCHA
let captchaValue = '';
function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    captchaValue = '';
    for (let i = 0; i < 6; i++) {
        captchaValue += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captchaText').innerText = captchaValue;
}

// Generate QR Code
function generateQRCode() {
    const qrCodeDiv = document.getElementById('qrcode');
    qrCodeDiv.innerHTML = ''; // Clear previous QR code
    const url = window.location.href; // QR links to current page (or customize this)
    QRCode.toCanvas(url, { width: 150 }, function (error, canvas) {
        if (error) console.error(error);
        qrCodeDiv.appendChild(canvas);
    });
}

// Validate form
function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const captchaInput = document.getElementById('captchaInput').value;

    if (captchaInput !== captchaValue) {
        alert('Incorrect CAPTCHA. Please try again.');
        generateCaptcha();
        return;
    }

    // Simple validation (replace with your logic)
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
}

// Initialize on page load
window.onload = function() {
    generateCaptcha();
    generateQRCode();
};