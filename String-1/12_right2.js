function right2(str) {
  let lastTwoChar = str.substring(str.length - 2, str.length);
  let firstChars = str.substring(0, str.length - 2);
  return lastTwoChar + firstChars;
}
