function lastChars(a, b) {
  if (a.length == 0) a = "@";
  if (b.length == 0) b = "@";
  return a[0] + b[b.length - 1];
}
