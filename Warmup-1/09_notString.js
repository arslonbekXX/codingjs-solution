function notString(str) {
  if (str.indexOf("not") == 0) return str;
  else return "not " + str;
}
