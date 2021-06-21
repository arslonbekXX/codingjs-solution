function stringBits(str) {
  let result = "";
  for (let i = 0; i < str.length; i += 2) {
    result += str[i];
  }
  return result;
}
