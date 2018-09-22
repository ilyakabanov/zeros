module.exports = function getZerosCount(number) {

  let arr = [];
  let i = 5;

  while (i < number) {

    arr.push(i);
    i = i * 5;
  }

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += Math.floor(number / arr[i]);
  }

  return result;
}
