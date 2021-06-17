function everyNth(str, n) {
  let result = "";
  for (let i = 0; i < str.length; i += n) {
    result += str[i];
  }
  return result;
}
