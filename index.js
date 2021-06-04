function sumItems(array) {
  // let sum = 0;
  // for (let i = 0; i < array.length; i++) {
  //   if (typeof array[i] == "number") {
  //     sum += array[i];
  //   } else if (array[i] instanceof Array) {
  //     sum += sumItems(array[i]);
  //   }
  // }
  // return sum;
  let flat = array.flat(Infinity);
  let summed = flat.reduce((a, b) => {
    return a + b;
  });
  return summed;
}

module.exports = sumItems;
