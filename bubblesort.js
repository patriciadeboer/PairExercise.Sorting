function swap(i, j, arr) {
  let firstNum = arr[j - 1];
  let secondNum = arr[j];

  if (firstNum > secondNum) {
    arr[j - 1] = secondNum;
    arr[j] = firstNum;
  }
}

function bubbleSort(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      swap(i, j, arr);
    }
  }
  return arr;
}
