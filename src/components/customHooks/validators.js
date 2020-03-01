const ONLY_LETTERS_AND_SPACES_REGEX = /^[a-zA-Z ]+$/;

export const validateFieldCantBeEmpty = (
  message = 'Field cant be empty',
) => value => ({
  hasError: !value,
  message,
});

export const validateTextOnlyLettersAndSpaces = (
  message = 'Field must consist only letters',
) => value => ({
  hasError: !ONLY_LETTERS_AND_SPACES_REGEX.test(value),
  message,
});

export const validateMinTextLength = (
  minLength,
  message = 'field min length',
) => {
  return text => ({
    hasError: String(text).length < minLength,
    message: message + ' ' + minLength,
  });
};
