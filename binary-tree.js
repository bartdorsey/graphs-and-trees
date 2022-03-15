// A node for a binary tree has a value and a left and right property.
// Compare this with a doubly linked list which has prev and next
const createNode = (value, left = null, right = null) => {
  return {
    value,
    left,
    right,
  }
}

// To walk the tree depth first, you can use a stack
// and a while loop
const printTreeDepthFirstIterative = (node) => {
  const stack = [node];
  while (stack.length) {
    const currentNode = stack.pop();
    console.log(currentNode.value);
    if (currentNode.left) {
      stack.push(currentNode.left);
    }
    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }
}

// To walk the tree depth first, recursion is the best choice.
// Also this uses a stack as well. It uses the CALL STACK 🤯
const printTreeDepthFirstRecursive = (node) => {
  if (!node) {
    return
  }
  console.log(node.value)
  printTreeDepthFirstRecursive(node.left)
  printTreeDepthFirstRecursive(node.right)
}

// To walk the tree breadth first, we use a while loop and a QUEUE
const printTreeBreadthFirst = node => {
  const queue = [node]
  while (queue.length) {
    const currentNode = queue.shift()
    console.log(currentNode.value)
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }
}

// This is the same as the print function, 
// but we are looking for a value, so we return
// a boolean if we find it.
const depthFirstSearch = (node, value) => {
  if (!node) {
    return false
  }
  if (node.value === value) {
    return true
  }
  return (
    depthFirstSearch(node.left, value) ||
    depthFirstSearch(node.right, value)
  )
}


// This is the same as the print function above
// but we are looking for a value, so we return 
// a boolean if we find it.
const breadthFirstSearch = (node, value) => {
  const queue = [node]
  while (queue.length) {
    const currentNode = queue.shift()
    if (currentNode.value === value) {
      return true
    }
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }
  }
  return false
}

// This is a simple three node tree
const simple_tree = createNode(1);
simple_tree.left = createNode(2);
simple_tree.right = createNode(3);

printTreeDepthFirstRecursive(simple_tree)
printTreeBreadthFirst(simple_tree)

console.log(depthFirstSearch(simple_tree, 1))
console.log(breadthFirstSearch(simple_tree, 3))

// This is a more complicated binary tree
// It saves us making variables for all the nodes if we just
// nest the function calls.
const tree = 
  createNode(8, // the root
    createNode(3, // left of 8
      createNode(1), // left of 3
      createNode(6,  // right of 3
        createNode(4), // left of 6
        createNode(7) // right of 6
      )
    ),
    createNode(10, // right of 8
      createNode(9), // left of 10
      createNode(14, // right of 10
        createNode(13), // left of 14
        createNode(15)  // right of 14
      )
    )
  )

printTreeDepthFirstIterative(tree)
printTreeBreadthFirst(tree)

console.log(depthFirstSearch(tree, 1))
console.log(breadthFirstSearch(tree, 3))