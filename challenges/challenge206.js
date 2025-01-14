// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = [1,2]
// Output: [2,1]

// Input: head = []
// Output: []

var reverseList = function (head) {
  // Зберігаєш next (посилання на наступний вузол).
  // Змінюєш current.next, щоб він вказував на prev (реверсування посилання).
  // Оновлюєш prev до current (пересуваєш попередній вузол вперед).
  // Пересуваєш current до next.

  let prev = null;
  let current = head;

  while (current) {
    let next = current.next; // Зберігаємо посилання на наступний вузол
    current.next = prev; // Реверсуємо посилання
    prev = current; // Пересуваємо prev вперед
    current = next; // Пересуваємо current вперед
  }

  return prev; // Повертаємо нову голову списку
};
