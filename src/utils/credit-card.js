const validateByLuhn = attempt => {
  const ccNumber = attempt.toString();
  const lengthOfAttempt = ccNumber.length;

  const needToDouble = index =>
    lengthOfAttempt === 15 ?
      index % 2 !== 0 :
      index % 2 === 0;

  if (lengthOfAttempt < 15 || lengthOfAttempt > 16) {
    return Promise.reject(`invalid CC #: Length: expected 15 or 16 recieved: ${lengthOfAttempt}`);
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
  return 10 - (digitsSum % 10) === checkSum ?
    Promise.resolve(ccNumber) :
    Promise.reject('invalid CC #: Checksum');
}

export { validateByLuhn }; 