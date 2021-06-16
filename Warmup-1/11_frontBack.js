function frontBack(str) {
  if (str.length <= 1) return str;
  else {
    return str[str.length - 1] + str.substring(1, str.length - 1) + str[0];
  }
}
