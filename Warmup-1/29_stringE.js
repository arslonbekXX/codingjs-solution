function stringE(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "e") counter++;
  }
  return counter <= 3 && counter != 0;
}
