export default attempt => {
  if (attempt.trim().length < 1) {
    throw new Error('Please enter a valid alias');
  } else {
    return attempt;
  }
};