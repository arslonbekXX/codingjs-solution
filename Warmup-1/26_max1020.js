/* 
  Ikkita musbat int berilgan, 10 va20 oralig'idagi kattaroq qiymatni 
  qaytaring. Agar ikkalasi ham bu oraliqda bo'lmasa, 0 ni qaytaring.
*/

function max1020(a, b) {
  if ((a >= 10 && a <= 20) || (b >= 10 && b <= 20)) {
    if (a > b) return a;
    else return b;
  } else return false;
}
