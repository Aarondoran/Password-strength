// index.js
const commonPasswords = [
    "123456", "password", "123456789", "12345678", "12345",
    "1234567", "qwerty", "abc123", "password1", "123123",
    "admin", "letmein", "welcome", "monkey", "football"
];

function checkPasswordStrength(password) {
    if (commonPasswords.includes(password.toLowerCase())) {
        return "Weak";  // Common password, considered very weak
    }
    
    let score = 0;
    if (password.length > 9) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return "Weak";    // Weak password
    if (score === 3) return "Moderate";  // Moderate password
    return "Strong";  // Strong password
}

module.exports = checkPasswordStrength;

// Usage Example:
// const checkPasswordStrength = require('./index');
// console.log(checkPasswordStrength("P@ssw0rd123")); // Output: Strong
