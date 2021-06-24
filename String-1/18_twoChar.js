function twoChar(str, index) {
  return (str.length < index * 1.5 || index < 0) ? str[0] + str[1] : str.substring(index, index + 2);
}
