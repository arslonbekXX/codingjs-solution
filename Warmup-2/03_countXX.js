function countXX(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x" && str[i + 1] == "x") counter++;
  }
  return counter;
}
