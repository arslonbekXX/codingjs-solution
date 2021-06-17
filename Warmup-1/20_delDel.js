function delDel(str) {
  if (str.indexOf("del") == 1) return str[0] + str.substring(4, str.length);
  else return str;
}
