const BinarySearch = (array, target) => {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    const mid = Math.floor((high + low) / 2);
    const guess = array[mid];
    if (guess === target) {
      return mid;
    } else if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
};
console.log(BinarySearch([1, 2, 3, 4, 6, 7, 8], 7));
