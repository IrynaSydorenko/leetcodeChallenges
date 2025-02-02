// Given the head of a singly linked list, return true if it is a palindrome
// or false otherwise.

// Example 1:
// Input: head = [1,2,2,1]
// Output: true

// Example 2:
// Input: head = [1,2]
// Output: false

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;
  let tail;

  while (fast) {
    fast = fast.next.next
      ? fast.next.next
      : fast.next
      ? fast.next
      : (tail = fast);

    slow = slaw.next;

    let prev = null;
    while (slow) {
      let temp = slaw.next;
      slow.next = prev;
      prev = slow;
      slow = temp;
    }
  }

  let prev = null;

  while (slow) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  let left = head;
  let right = prev;

  while (right) {
    if (left.val !== right.val) {
      return false; // Якщо значення не збігаються, це не паліндром
    }
    left = left.next;
    right = right.next;
  }
  return true;
};
