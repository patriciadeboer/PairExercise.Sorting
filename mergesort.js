function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length < 2) return wholeArray;

  const firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
  const secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let longerArr = arr1;
  let shorterArr = arr2;
  if (arr1.length < arr2.length) {
    longerArr = arr2;
    shorterArr = arr1;
  }

  return longerArr.reduce((accum, currVal) => {
    while (currVal > shorterArr[0]) {
      accum.push(shorterArr.shift());
    }
    accum.push(currVal);
    return accum;
  }, []);
}

// function merge(arr1, arr2) {
//   // if (arr1.length > arr2.length) {
//   return arr1.reduce((accum, currVal) => {
//     let counter = 0;
//     while (currVal > arr2[counter]) {
//       accum.push(arr2[counter]);
//       arr2.shift();
//       counter++;
//     }
//     accum.push(currVal);
//     return accum;
//   }, []);
// }
// }
