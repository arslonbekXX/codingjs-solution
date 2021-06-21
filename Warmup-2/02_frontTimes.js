function frontTimes(str, n) {
  if (str.length >= 3) return str.substring(0, 3).repeat(n);
  else return str.repeat(n);
}