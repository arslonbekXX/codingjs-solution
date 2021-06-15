function missingChar(str, n) {
  return str.substring(0, n) + str.substring(n + 1, str.length);
}