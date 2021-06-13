function extraFront(str) {
    let twoChars = str.substring(0, 2);
    if (str.length >= 2) return twoChars + twoChars + twoChars;
    else return str + str + str;
}