function endUp(str) {
  if (str.length >= 3)
    return (
      str.substring(0, str.length - 3) +
      str.substring(str.length - 3, str.length).toUpperCase()
    );
  else return str.toUpperCase();
}
