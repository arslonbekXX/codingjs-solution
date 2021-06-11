function atFirst(str) {
  if (str.length >= 2) return str[0] + str[1];
  else if (str.length == 0) return "@@";
  else return str[0] + "@";
}
