// With graphs the terminology is different but the ideas are the same.
// Nodes are called Vertices and Children are called Edges.
const createVertex = (value, edges = []) => {
  return {
    value,
    edges,
  }
}

// This looks almost identical to our depth first print for n-ary trees.
// Except it uses a JavaScript Set to keep track of which graph
// vertices we have already seen, otherwise we might end up in an
// infinite loop
const printGraphDepthFirst = (vertex, visited = new Set()) => {
  // Check to see if we've visited this vertex before
  if (visited.has(vertex.value)) {
    return
  }
  // Add this vertex to the set
  visited.add(vertex.value);
  if (vertex === null) {
    return
  }
  console.log(vertex.value)
  for (const adjacentVertex of vertex.edges) {
    printGraphDepthFirst(adjacentVertex, visited)
  }
}

// Same thing for Breadth first search, we need the set to keep track
// of which nodes we've visited
const printGraphBreadthFirst = (vertex) => {
  const visited = new Set();
  const queue = [vertex];
  while (queue.length) {
    const currentVertex = queue.shift()
    // If we've seen this vertex before, `continue`
    // which causes the loop to skip the rest of this
    // iteration
    if (visited.has(currentVertex.value)) {
      continue;
    }
    // Add the visited vertex to the set
    visited.add(currentVertex.value);
    console.log(currentVertex.value)
    for (const adjacentVertex of currentVertex.edges) {
      queue.push(adjacentVertex)
    }
  }
}

// Same as the print function above but we are looking for a value
// and returning true or false if we found it or not
const depthFirstSearch = (vertex, value, visited = new Set()) => {
  if (vertex === null) {
    return false
  }
  if (visited.has(vertex.value)) {
    return false;
  }
  visited.add(vertex.value);
  console.log("Searching", vertex.value)
  if (vertex.value === value) {
    return true
  }
  for (const adjacentVertex of vertex.edges) {
    const result = depthFirstSearch(adjacentVertex, value, visited);
    if (result) {
      return true;
    }
  }
  return false;
}

// Same as the print function above but we are looking for a value
// and returning true or false if we found it or not
const breadthFirstSearch = (vertex, value) => {
  const visited = new Set();
  const queue = [vertex]
  while (queue.length) {
    const currentVertex = queue.shift()
    if (visited.has(currentVertex.value)) {
      continue;
    }
    visited.add(currentVertex.value);
    console.log("Searching", currentVertex.value);
    if (currentVertex.value === value) {
      return true
    }
    for (const adjacentVertex of currentVertex.edges) {
      queue.push(adjacentVertex)
    }
  }
  return false
}


// our simple tree is a graph too! 
const simple_tree = createVertex(1)
simple_tree.edges.push(createVertex(2));
simple_tree.edges.push(createVertex(3));

printGraphDepthFirst(simple_tree)
printGraphBreadthFirst(simple_tree)

console.log(depthFirstSearch(simple_tree, 1))
console.log(breadthFirstSearch(simple_tree, 3))

// Our binary tree as a DIRECTED graph
const graph = 
  createVertex(8, [
    createVertex(3, [
      createVertex(1),
      createVertex(6, [createVertex(4), createVertex(7)]),
    ]),
    createVertex(10, [
      createVertex(9),
      createVertex(14, [createVertex(13), createVertex(15)]),
    ]),
  ])

// Our n-ary tree as a DIRECTED graph
const n_ary_tree = 
  createVertex(8, [
    createVertex(3),
    createVertex(4),
    createVertex(5)
  ])

// A graph that loops back on itself.
// This is an UNDIRECTED graph
// First create the vertices
const vertexA = createVertex('a');
const vertexB = createVertex('b');
const vertexC = createVertex('c');
const vertexD = createVertex('d');
const vertexE = createVertex('e');

// Now connect them with edges
vertexA.edges.push(vertexC, vertexB);
vertexB.edges.push(vertexA, vertexD);
vertexC.edges.push(vertexA, vertexD);
vertexD.edges.push(vertexC, vertexE);
vertexE.edges.push(vertexD);

printGraphDepthFirst(vertexA);
printGraphBreadthFirst(vertexA);

console.log(depthFirstSearch(vertexA, 'e'))
console.log(breadthFirstSearch(vertexA, 'e'))
