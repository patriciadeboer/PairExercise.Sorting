function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length < 2) return wholeArray;

  const firstHalf = wholeArray.slice(0, Math.floor(wholeArray.length / 2));
  const secondHalf = wholeArray.slice(Math.floor(wholeArray.length / 2));
  return [firstHalf, secondHalf];
}

// function merge(arr1, arr2) {
//   let longerArr = arr1;
//   let shorterArr = arr2;
//   console.log('merge arr1:', arr1);
//   console.log('merge arr2:', arr2);
//   if (arr1.length < arr2.length) {
//     longerArr = arr2;
//     shorterArr = arr1;
//   }

//   const returnMerge = longerArr.reduce((accum, currVal) => {
//     while (currVal > shorterArr[0]) {
//       accum.push(shorterArr.shift());
//     }
//     accum.push(currVal);
//     return accum;
//   }, []);
//   console.log('return in Merge value:', returnMerge);
//   return returnMerge;
// }

function merge(arr1, arr2) {
  let longerArr = arr1;
  let shorterArr = arr2;
  console.log('merge arr1:', arr1);
  console.log('merge arr2:', arr2);
  if (arr1.length < arr2.length) {
    longerArr = arr2;
    shorterArr = arr1;
  }

  const returnMerge = longerArr.reduce((accum, currVal) => {
    for(let i =0 ; i< shorterArr.length; i++){
      if(currVal > shorterArr[i]){
        accum.push(shorterArr.shift())
      }else{
        accum.push(currVal)
        accum.push(shorterArr.shift())
      }
    }

    console.log('accum in returnMerge:', accum)
    return accum;

  }, []);
  console.log('return in Merge value:', returnMerge);
  return returnMerge;
}

function mergeSort(array) {
  //debugger
  if (array.length < 2) {
    console.log(array);
    return array;
  } else if (array.length >= 2) {
    console.log('array before split', array);
    let arrSplit = split(array);
    console.log('arrSplit result:', arrSplit);
    let arr1 = arrSplit[0];
    let arr2 = arrSplit[1];
    return merge(mergeSort(arr1), mergeSort(arr2));
  }
  //return array
  //keep splitting until we are at array's of 1
  // split(array);
}
