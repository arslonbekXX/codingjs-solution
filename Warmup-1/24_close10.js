function close10(a, b) {
  if (Math.abs(a - 10) > Math.abs(b - 10)) return b;
  if (Math.abs(a - 10) < Math.abs(b - 10)) return a;
  else return 0;
}
