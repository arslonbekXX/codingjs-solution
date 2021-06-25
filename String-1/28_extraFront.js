function extraFront(str) {
    let twoChars = str.substring(0, 2);
    return str.length >= 2 ? twoChars.repeat(3) : str + str + str;
}