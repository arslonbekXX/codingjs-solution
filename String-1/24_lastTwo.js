function lastTwo(str) {
  if (str.length >= 2)
    return (
      str.substring(0, str.length - 2) +
      str[str.length - 1] +
      str[str.length - 2]
    );
  else return str;
}
