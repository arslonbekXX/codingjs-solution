function without2(str) {
    if (str.length >= 3) {
        if (str.substring(0, 2) == str.substring(str.length - 2, str.length) return str.substring(2, str.length);
            else return str;
        }
        else {
            if (str.length == 1) return str;
            else return '';
        }
    }
}