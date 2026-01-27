export const validateLoginData = (email, password) => {
    if (!email || !password) {
        return "Email and Password are required.";
    }

    const isEmailValid =
        /^[a-zA-Z0-9._-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if (!isEmailValid) {
        return "Invalid Email";
    }
    if (!isPasswordValid) {
        return "Enter strong password";
    }
    return null;
};

export const validateSignupData = (fullName, email, password) => {
    if (!fullName || !email || !password) {
        return "Full Name, Email and Password are required.";
    }

    const isEmailValid =
        /^[a-zA-Z0-9._-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

    if (!isEmailValid) {
        return "Invalid Email";
    }
    if (!isPasswordValid) {
        return "Enter strong password";
    }
    return null;
};
