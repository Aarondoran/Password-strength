# Password Strength Checker

A simple Node.js package to check the strength of a password based on various criteria including length, character types, and common password checks.

## Features

- Checks password length (more than 9 characters)
- Verifies the presence of:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters (e.g., `!@#$%^&*`)
- Checks against a list of common passwords to warn users about weak passwords.

## Installation

You can install this package via npm:

```
npm install password-strength-checker
```
## Usage

Import the module in your Node.js application:
```const checkPasswordStrength = require('password-strength-checker');```

Call the function with the password you want to check:
```console.log(checkPasswordStrength('P@ssw0rd123')); // Output: Strong```

## Password Strength Ratings
Weak: Password doesn't meet the minimum criteria.

Moderate: Meets some criteria but not all.

Strong: Meets most of the criteria.

Very Strong: Meets all criteria, including checking against common passwords.

Very Weak (Common Password): The password is a known weak or common password (e.g., 123456, password).

## Common Password List
The following passwords are considered weak and are checked against the list:

123456, password, 123456789, 12345678, 12345

1234567, qwerty, abc123, password1, 123123

admin, letmein, welcome, monkey, football

## Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1. **Fork the repository** and create your branch (```git checkout -b feature-name```).
2. **Make your changes** and ensure that the code works correctly.
3. **Commit your changes** (```git commit -am 'Add new feature'```).
4. **Push to your branch** (```git push origin feature-name```).
5. **Open a pull request** with a description of what you've done.

Please ensure your code follows the existing style and that tests pass before submitting a pull request. If you're reporting a bug or suggesting a feature, please include as much detail as possible.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
