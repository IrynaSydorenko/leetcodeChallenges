console.log('Topik: ', 'reverseString');
function reverseString(string) {
  if (!string || string.length < 2 || typeof string !== 'string') {
    return "hmm it's not good";
  }

  const arrayFromString = string.split(' ');

  let end = arrayFromString.length - 1;
  let start = 0;

  while (start !== end) {
    let startString = arrayFromString[start];
    let endString = arrayFromString[end];

    arrayFromString[start] = endString;
    arrayFromString[end] = startString;

    start++;
    end--;
  }
  return arrayFromString.join(' ');
}

console.log(reverseString('I love you very much!!!'));
