// UYGA VAZIFA TAYYOR
let a = 100;
let b = 100;
let c = 100;
let allsum = 11000.34 * 870;
let usersum;
let res;
if (a && b && c < allsum) {
  usersum = (a + b + c) * 11000.34;
}
if (usersum - allsum == usersum > 0) {
  res = "Oq yo'l ALisher";
} else {
  res = "Alisher ozgina sabr qilishga to'g'ri keladi";
}
console.log(res);
