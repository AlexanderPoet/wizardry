const ccValidator = attempt => {
  const errorMessage = 'Please enter a valid credit card number'
  const ccNumber = attempt.toString();
  const lengthOfAttempt = ccNumber.length;

  const needToDouble = index =>
    lengthOfAttempt === 15 ?
      index % 2 !== 0 :
      index % 2 === 0;

  if (lengthOfAttempt < 15 || lengthOfAttempt > 16) {
    throw new Error(errorMessage);
  }

  const checkSum = Number(attempt[lengthOfAttempt - 1]);
  let digitsSum = 0;

  for (let i = lengthOfAttempt - 2; i >= 0; i--) {
    let num = attempt[i];
    let doubleNum = num * 2;

    if (needToDouble(i)) {
      if (doubleNum > 9) {
        doubleNum = doubleNum.toString();
        doubleNum = Number(doubleNum[0]) + Number(doubleNum[1]);
      }
      digitsSum += Number(doubleNum);
    } else {
      digitsSum += Number(num);
    }
  }
  if (10 - (digitsSum % 10) === checkSum) {
    return ccNumber;
  } else {
    throw new Error(errorMessage);
  }
};

export default ccValidator;