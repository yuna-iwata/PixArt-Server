interface RegisterErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

interface LoginErrors {
  username?: string;
  password?: string;
  general?: string;
}

export const validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors: RegisterErrors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (username.trim() === "") {
    errors.email = "Username must not be empty";
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.email = "Error must be a valid email address";
    }
  }
  if (password === "") {
    errors.password = "Password must not be empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

export const validateLoginInput = (username, password) => {
  const errors: LoginErrors = {};
  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (password.trim() === "") {
    errors.password = "Username must not be empty";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
