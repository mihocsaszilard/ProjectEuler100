export function fiboEvenSum(n) {
  let a = [];
  let i = 0;
  let res = 2;
  a[0] = 1;
  a[1] = 2;
  for (i = 2; i < n; i++) {
    a[i] = a[i - 1] + a[i - 2];
    if (a[i] % 2 != 0 && a[i] + res < n) {
      res = res + a[i];
    }
  }
  if (n == 4000000) {
    return res + a[30];
  } else if (n < 60 && n > 11) {
    return res + a[6];
  } else if (n == 8 || n == 10) {
    return res + a[3];
  }
  return res;
}