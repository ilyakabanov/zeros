module.exports = function getZerosCount(number) {
  // решается через формулу Лежандра
  // каждый ноль на конце number соответствует паре сомножителей 2*5
  // в разложении числа number на произведение простых сомножителей (факторизации).
  // Так как в факторизации number количество 5 всегда будет меньше,
  // чем количество 2, ответ на вопрос сводится к определению количества
  // сомножителей 5 в факторизации number.
  let arr = [],
      i = 5,
      result = 0;

  // находим все степени числа 5
  while (i < number) {

    arr.push(i);
    i = i * 5;
  }

  for (let i = 0, len = arr.length; i < len; i++) {
    result += Math.floor(number / arr[i]);
  }

  return result;
}
