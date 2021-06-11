function nonStart(a, b) {
  let withoutFirstCharA = a.substring(1, a.length);
  let withoutFirstCharB = b.substring(1, b.length);
  return withoutFirstCharA + withoutFirstCharB;
}
