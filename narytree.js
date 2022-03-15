const createNode = (value, children = []) => {
  return {
    value,
    children
  }
} 

const printTreeDepthFirst = (node) => {
  if (!node) {
    return
  }
  console.log(node.value)
  for (const childNode of node.children) {
    printTreeDepthFirst(childNode)
  }
}

const printTreeBreadthFirst = (node) => {
  if (!node) {
    return;
  } 
  const queue = [node]
  while (queue.length) {
    const currentNode = queue.shift()
    console.log(currentNode.value);
    if (currentNode.children.length) {
      for (const childNode of currentNode.children) {
        queue.push(childNode)
      }
    }
  }
}

const depthFirstSearch = (node, value) => {
  if (!node) {
    return false
  }
  console.log("Searching", node.value)
  if (node === null) {
    return false
  }
  if (node.value === value) {
    return true
  }
  for (const childNode of node.children) {
    const result = depthFirstSearch(childNode, value);
    if (result) {
      return true;
    }
  }
  return false;
}

const breadthFirstSearch = (node, value) => {
  const queue = [node]
  while (queue.length) {
    const currentNode = queue.shift()
    console.log("Searching", currentNode.value);
    if (currentNode.value === value) {
      return true
    }
    if (currentNode.children.length) {
      for (const childNode of currentNode.children) {
        queue.push(childNode);
      }
    }
  }
  return false
}

// our simple tree is a n-ary-tree but we use children instead of left and right
const simple_tree = createNode(1)
simple_tree.children.push(createNode(2));
simple_tree.children.push(createNode(3));

printTreeDepthFirst(simple_tree)
printTreeBreadthFirst(simple_tree)

console.log(depthFirstSearch(simple_tree, 1))
console.log(breadthFirstSearch(simple_tree, 3))

// Our binary tree can also be created using our nary tree functions.
// but you'll notice we have to pass the children as an array 
// this time compared to our binary tree solution
const binary_tree = 
  createNode(8, [
    createNode(3, [
      createNode(1),
      createNode(6, [
        createNode(4),
        createNode(7)
      ])
    ]),
    createNode(10, [
      createNode(9),
      createNode(14, [
        createNode(13),
        createNode(15)
      ])
    ])
  ])

// but this tree has more than just a left and a right
// node 8 has three children.
const n_ary_tree = 
  createNode(8, [
    createNode(3),
    createNode(4),
    createNode(5)
  ])

printTreeDepthFirst(n_ary_tree)
printTreeBreadthFirst(n_ary_tree);

console.log(depthFirstSearch(n_ary_tree, 5))
console.log(breadthFirstSearch(n_ary_tree, 5))