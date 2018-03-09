//TODO abilitiy to change area/implement their check

const funcMap = {
  'USA': val => usCheck(val)
}

//TODO decrease frailty by accepting +xxxxxxxxxx and xxx-xxx-xxxx etc.

const usCheck = attempt => {
  const attemptedNumber = Number(attempt);
  if (attemptedNumber &&
      (attempt === attemptedNumber.toString()) &&
      (attempt.length === 10 || attempt.length === 11 )) {
    return attempt;
  } else {
    throw new Error('Please enter a valid US phone number');
  }
}


export default attempt => {
  const area = 'USA'; 
  return funcMap[area](attempt);
}