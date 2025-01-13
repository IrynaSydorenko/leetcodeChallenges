// Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.
// For example:

// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701

// Constraints:

// 1 <= columnTitle.length <= 7
// columnTitle consists only of uppercase English letters.

//моє намагання зрозуміти задачу:
// тут виходить що до  Z  потім треба додавати відсоток від ділення
// і то якщо перша літера A в AA то 26 це виходить як цикл

// Колонки Excel організовані у системі числення з основою 26,

var titleToNumber = function (columnTitle) {
  // Для AA це виглядає так: (1 * 26) + 1 = 27.
  // Для BA: B — це 2, тому: (2 * 26) + 1 = 53.
  // BAC: Result=(B×26^2)+(A×26^1)+(C×26^0)
  let result = 0;
  let power = 0;

  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const restFromDividing = columnTitle.charCodeAt(i) % 64;
    result += restFromDividing * 26 ** power;
    power++;
  }
  return result;
};

// console.log(titleToNumber('ZY'));
