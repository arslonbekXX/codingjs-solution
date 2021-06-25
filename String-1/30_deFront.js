function deFront(str) {
    if (str[0] != 'a' && str[1] != 'b') return str.substring(2, str.length);
    else {
        if (str[0] == 'a' && str[1] == 'b') return str;
        else if (str[0] == 'a' && str[1] != 'b') return str[0] + str.substring(2, str.length);
        else if (str[0] != 'a' && str[1] == 'b') return str[1] + str.substring(2, str.length);
    }
}