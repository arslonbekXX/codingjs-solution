function stringSplosion(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += str.substring(0, i);
  }
  return result;
}