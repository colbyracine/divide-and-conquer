function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      // we found the element
      return mid;
    } else if (arr[left] <= arr[mid]) {
      // the left half of the array is sorted
      if (num >= arr[left] && num < arr[mid]) {
        // the element is in the left half of the array
        right = mid - 1;
      } else {
        // the element is in the right half of the array
        left = mid + 1;
      }
    } else {
      // the right half of the array is sorted
      if (num > arr[mid] && num <= arr[right]) {
        // the element is in the right half of the array
        left = mid + 1;
      } else {
        // the element is in the left half of the array
        right = mid - 1;
      }
    }
  }

  // the element is not in the array
  return -1;
}
