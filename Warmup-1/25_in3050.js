/* 
    Ikkita int qiymat berilgan. Agar ularning ikkalasi ham 40 va 50 
    orasida bo'lsa, true qaytaring
*/

function in3050(a, b) {
  if (a >= 40 && a <= 50 && b >= 40 && b <= 50) return true;
  else if ((a < 40 || a > 50) && (b < 40 || b > 50)) return true;
  else return false;
}
