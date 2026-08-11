const isPalindrom = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = normalized.split("").reverse().join("");
  if (normalized === reversed) {
    return true;
  }
  return false;
};
// console.log(isPalindrom("a man , a plan, a canal:panama"));
//two pointer uses check is palindrin or is not plaindrom
const isPalindromTwoPointer = (str) => {
  const normal = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = normal.length - 1;
  while (left < right) {
    if (normal[left] != normal[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
console.log(isPalindromTwoPointer("a man , a plan, a canal:panama"));
