export const validatEmailPassData = (email, password) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  //     ^[^\s@]+: The email must start with one or more characters that are not spaces or @.
  // @[^\s@]+: There must be an @ symbol followed by one or more non-space characters.
  // \.[^\s@]+$: A dot (.) must follow, and it must be followed by one or more non-space characters (the domain).
  const isPassValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  //     (?=.*[a-z]): At least one lowercase letter.
  // (?=.*[A-Z]): At least one uppercase letter.
  // (?=.*\d): At least one digit.
  // (?=.*[@$!%*?&]): At least one special character from @$!%*?&.
  // [A-Za-z\d@$!%*?&]{8,}: Minimum length of 8 characters, allowing letters, digits, and special characters.
  if (!isEmailValid) return "Email ID is invalid";
  if (!isPassValid) return "Password is invalid";
  return null;
};
