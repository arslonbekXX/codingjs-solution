function frontAgain(str) {
    if (str.length >= 2) {
        if (str.substring(0, 2) == str.substring(str.length - 2)) return true;
        else return false;
    } else return false;
}