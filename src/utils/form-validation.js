import { ccValidator, emailValidator, fullNameValidator, phoneNumberValidator, aliasValidator } from './';

const funcMap = {
  'Full Name': val => fullNameValidator(val),
  'Alias': val => aliasValidator(val),
  'Phone Number': val => phoneNumberValidator(val),
  'Email': val => emailValidator(val),
  'Credit Card Number': val => ccValidator(val),
  'Paypal Email': val => emailValidator(val),
}

export default inputArr =>
  inputArr.filter(fieldData => {
    const { name, val } = fieldData;
    if (val !== '') {
      try {
        funcMap[name](val);
      }
      catch (e) {
        fieldData.error = true;
        fieldData.errorMessage = e.message;
        return false;
      }
      return true;
    } else {
      return val !== '';
    }
  }
);