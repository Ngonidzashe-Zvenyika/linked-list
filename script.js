// This function creates a linked list node;
function ListNode() {
  return { value: null, next: null };
}

// This function creates a linked list;
function LinkedList() {
  const list = {
    head: null,
  };

  // This method adds a new node containing value to the end of the list;
  const append = (value) => {
    let current = list.head;
    if (current) {
      while (current.next) {
        current = current.next;
      }
      const node = new ListNode();
      node.value = value;
      current.next = node;
    } else {
      const node = new ListNode();
      node.value = value;
      list.head = node;
    }
  };

  // This method adds a new node containing value to the start of the list;
  const prepend = (value) => {
    let head = list.head;
    if (head) {
      let temp = list.head;
      const node = new ListNode();
      node.value = value;
      node.next = temp;
      list.head = node;
    } else {
      const node = new ListNode();
      node.value = value;
      list.head = node;
    }
  };

  // This method returns the total number of nodes in the list;
  const size = () => {
    let count = 0;
    let current = list.head;
    while (current) {
      count += 1;
      current = current.next;
    }
    return count;
  };

  // This method returns the first node in the list;
  const head = () => {
    return list.head;
  };

  // This method returns the last node in the list;
  const tail = () => {
    let current = list.head;
    if (current) {
      while (current.next) {
        current = current.next;
      }
    }
    return current;
  };

  // This method returns the node at the given index;
  const at = (index) => {
    let count = 0;
    let current = null;
    if (index >= 0) {
      current = list.head;
      while (count < index && current) {
        current = current.next;
        count += 1;
      }
    }
    return current;
  };

  // This method removes the last element from the list;
  const pop = () => {
    let current = list.head;
    if (current) {
      let previous;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous ? (previous.next = null) : (list.head = null);
    }
  };

  // This method returns true if the passed in value is in the list and otherwise returns false;
  const contains = (value) => {
    let current = list.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  };

  // This method returns the index of the node containing value, or null if not found;
  const findIndex = (value) => {
    let count = 0;
    let current = list.head;
    while (current) {
      if (current.value === value) {
        return count;
      } else {
        current = current.next;
        count += 1;
      }
    }
    return null;
  };

  // This method inserts a new node with the provided value at the given index;
  const insertAt = (value, index) => {
    let count = 0;
    let previous = null;
    let current = list.head;
    if (index >= 0) {
      while (count < index && current) {
        previous = current;
        current = current.next;
        count += 1;
      }
      if (index === 0) {
        const temp = list.head;
        const node = new ListNode();
        node.value = value;
        node.next = temp;
        list.head = node;
      } else if (index <= count) {
        const node = new ListNode();
        node.value = value;
        node.next = current;
        previous.next = node;
      }
    }
  };

  // This method removes the node at the given index;
  const removeAt = (index) => {
    let count = 0;
    let next;
    let previous;
    let current = list.head;
    while (count < index && current.next) {
      previous = current;
      current = current.next;
      next = current.next;
      count += 1;
    }
    if (count === index) {
      index === 0 ? (list.head = list.head.next) : (previous.next = next);
    }
  };

  // This method represents LinkedList objects as strings, so you can print them out and preview them in the console;
  const toString = () => {
    let current = list.head;
    let listString = '';
    while (current) {
      listString += `(${current.value}) -> `;
      current = current.next;
    }
    return (listString += current);
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    findIndex,
    insertAt,
    removeAt,
    toString,
  };
}
