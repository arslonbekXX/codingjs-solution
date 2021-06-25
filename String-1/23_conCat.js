function conCat(a, b) {
  return a[a.length - 1] == b[0] ? a.substring(0, a.length - 1) + b : a + b;
}
