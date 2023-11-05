//breadth first search
function bfs(graph, root) { //determining the distance of each node from the first node
    var nodesLen = {}; //this function will output an object of key-value pair where key is the node and the value is its distance from the first node i.e root
    
    for (var i = 0; i < graph.length; i++) {
      nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0; 
    
    var queue = [root]; //to keep track of nodes to visit
    var current; //keeps track of current node
  
    while (queue.length != 0) { //keep traversing utntil there are no more nodes in the queue to traverse
      current = queue.shift(); //popping of the node from queue //in the begnning it will be the root node
      
      var curConnected = graph[current];//here we get all the nodes connected to the current node
      var neighborIdx = []; //
      var idx = curConnected.indexOf(1); //gets the first node connected to the current node
      while (idx != -1) {
        neighborIdx.push(idx); 
        idx = curConnected.indexOf(1, idx + 1); //searches for the next connected node
      }
      
      for (var j = 0; j < neighborIdx.length; j++) { //we loop through all the connected nodes to get the distance
        if (nodesLen[neighborIdx[j]] == Infinity) { //means we havent set the distance of the node yet
          nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
          queue.push(neighborIdx[j]); //next time we go through the loop we will check for neighbors too
        }
      }
    }
    return nodesLen;
  };
 
  //passing an adjacency matrix
  var AdjacencyBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
  ];
  console.log(bfs(AdjacencyBFSGraph, 1));