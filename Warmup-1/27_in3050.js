/*
    Ikkita int qiymat berilgan, agar ular ikkalasi ham 30 va 40 yoki 40 
    va 50 oralig'ida bo'lsa, true qaytaring
*/

function in3050(a, b) {
  if (a >= 30 && a <= 40 && b >= 30 && b <= 40) return true;
  if (a >= 40 && a <= 50 && b >= 40 && b <= 50) return true;
  else return false;
}
