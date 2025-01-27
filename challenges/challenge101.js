var isSymmetric = function (root) {
  if (!root) return true; // Якщо дерево порожнє, воно симетричне

  let queue = [[root]]; // Початкова черга: корінь

  while (queue.length) {
    let currentLevel = queue.shift(); // Отримуємо поточний рівень
    let arr = [];

    // Додаємо дітей вузлів у масив
    for (let node of currentLevel) {
      if (node) {
        arr.push(node.left, node.right); // Додаємо дочірні елементи
      } else {
        arr.push(null); // Додаємо `null`, якщо вузол відсутній
      }
    }

    // Перевіряємо симетричність масиву
    let last = arr.length - 1;
    for (let i = 0; i <= last; i++) {
      if (
        (arr[i] === null && arr[last] !== null) ||
        (arr[i] !== null && arr[last] === null) ||
        (arr[i] !== null && arr[last] !== null && arr[i].val !== arr[last].val)
      ) {
        return false; // Дерево не симетричне
      }
      last--;
    }

    // Додаємо наступний рівень у чергу
    let nextLevel = arr.filter((node) => node !== null); // Фільтруємо вузли
    if (nextLevel.length) queue.push(nextLevel);
  }

  return true; // Якщо всі рівні симетричні
};
