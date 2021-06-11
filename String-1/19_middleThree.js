function middleThree(str) {
  let startCharIndex = (str.length - 3) / 2;
  return str.substring(startCharIndex, startCharIndex + 3);
}
