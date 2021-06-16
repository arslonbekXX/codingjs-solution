function front3(str) {
  let string = "";
  if (str.length <= 3) string = str;
  else string = str.substring(0, 3);
  return string.repeat(3);
}
