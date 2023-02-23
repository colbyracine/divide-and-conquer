function sortedFrequency(arr, num) {
  let firstIndex = findFirstIndex(arr, num);
  let lastIndex = findLastIndex(arr, num);

  if (firstIndex === -1 || lastIndex === -1) {
    // the number is not present in the array
    return 0;
  } else {
    // the number is present in the array
    return lastIndex - firstIndex + 1;
  }
}

function findFirstIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[mid] === num && (mid === 0 || arr[mid - 1] !== num)) {
      // we found the first occurrence of the number
      return mid;
    } else if (arr[mid] < num) {
      // search in the right half
      left = mid + 1;
    } else {
      // search in the left half
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  // the number is not present in the array
  return -1;
}

function findLastIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (arr[mid] === num && (mid === arr.length - 1 || arr[mid + 1] !== num)) {
      // we found the last occurrence of the number
      return mid;
    } else if (arr[mid] > num) {
      // search in the left half
      right = mid - 1;
    } else {
      // search in the right half
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  // the number is not present in the array
  return -1;
}
