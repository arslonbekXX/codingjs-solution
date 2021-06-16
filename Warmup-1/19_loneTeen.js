function loneTeen(a, b) {
  return (
    (a >= 13 && a <= 19 && !(b >= 13 && b <= 19)) ||
    (!(a >= 13 && a <= 19) && b >= 13 && b <= 19)
  );
}
