export const validate = (data) => {
  const errors = {};
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (!data.userName.trim()) {
    errors.userName = "User name is required";
  } else {
    delete errors.userName;
  }

  if (!data.email.trim()) {
    errors.email = "email is required";
  } else if (!regex.test(data.email)) {
    errors.email = "email is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "password is required";
  } else if (data.password.length < 6) {
    errors.password = "password must be longer than 6 character";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "confirm the password";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "password does not match";
  } else {
    delete errors.confirmPassword;
  }

  if (!data.isAccepted) {
    errors.isAccepted = "you must accept the requlations";
  } else {
    delete errors.isAccepted;
  }

  return errors;
};
