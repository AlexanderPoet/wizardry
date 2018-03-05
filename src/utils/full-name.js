// TODO: Different naming patterns functions perhaps ex: first middle last, LAST first etc.

export default attemptStr => {
  const attemptArr = attemptStr.split(' ');
  if (attemptArr.length > 1 && (
      attemptArr[0].length && attemptArr[1].length)) {
    return attemptStr;
  } else {
    throw new Error('Please enter a first and last name');
  }
};