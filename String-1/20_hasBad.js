function hasBad(str) {
  if (str.substring(0, 3) == "bad" || str.substring(1, 4) == "bad") return true;
  else return false;
}
