// rewrite string into object

const inData =
  'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue';

function queryObjectify(arg) {
  const array = arg.split('&');
  const result = {};

  array.forEach((pair, i) => {
    //['user.name.firstname=Bob', 'user.name.lastname=Smith', 'user.favoritecolor=Light%20Blue']
    let [keys, value] = pair.split('='); //[['user.name.firstname', 'Bob'], ['user.name.lastname', 'Smith'], ['user.favoritecolor', 'Light%20Blue']]
    const splittedString = keys.split('.'); //[[[user, name, firstname], Bob], [[user, name, lastname], Smith], [[user, favoritecolor], Light%20Blue]]
    splittedString.reduce((acc, element, index) => {
      if (index === splittedString.length - 1) {
        acc[element] = decodeURIComponent(value);
      } else {
        acc[element] = acc[element] || {};
      }
      return acc[element];
    }, result);
  });

  return result;

  console.log(array);
}

queryObjectify(inData);
