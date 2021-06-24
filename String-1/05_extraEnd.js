function extraEnd(str) {
  let lastTwoChar = str.substring(str.length - 2, str.length);
  return lastTwoChar + lastTwoChar + lastTwoChar;
}