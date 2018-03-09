// TODO: Make this pickier

export default attempt => {
  const errorMessage = 'Please enter a valid email address';
  let attemptArr = attempt.split('@');
  if (attemptArr.length <= 1) {
    throw new Error(errorMessage);
  }
  let attemptArr2 = attemptArr[1].split('.');
  if (attemptArr2.length <= 1) {
    throw new Error(errorMessage);
  } else {
    if (attemptArr2[1].length >= 1) {
      return attempt
    } else {
      throw new Error(errorMessage);
    }
  }
};