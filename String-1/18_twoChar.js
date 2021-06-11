function twoChar(str, index) {
  if (str.length < index * 1.5 || index < 0) return str[0] + str[1];
  else return str.substring(index, index + 2);
}
