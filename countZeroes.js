function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[mid] === 0 && (mid === 0 || arr[mid - 1] === 1)) {
      return arr.length - mid;
    } else if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }
}
