class Node {
  constructor(data, right = null, left = null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data); //check if root is null,then put data to new node
    } else {
      const searchTree = function (node) {
        //recursive function
        if (data < node.data) {
          //if the new data is less than the data of current node put it in left subtree
          if (node.left === null) {
            //if there is no node on left subtree,add a new node with the given new data
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            //else call this function again by passing argument as the current left subtree node
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          //same for right subtree
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  findMin() {
    let current = this.root; //returns the current leftmost subtree node
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    //returns the current rightmost subtree node
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root; //checks if the data is present in the tree
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    //similar as find function
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data) {
    //recursive function
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // node has no children
        if (node.left == null && node.right == null) {
          return null;
        }
        // node has no left child
        if (node.left == null) {
          return node.right; //replace the node with right one and delete the current one
        }
        // node has no right child
        if (node.right == null) {
          return node.left; //replace the node with left one and delete the current one
        }
        // node has two children
        var tempNode = node.right; //in this case replace with the down leftmost element via right child
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1; //height of the left and right subtree of any node differ by not more than 1.
  }
  findMinHeight(node = this.root) {
    if (node == null) {
      return -1; //eventually anyone is going to be null bz either left or right node will be null
    }
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  inOrder() {
    //left root right
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }
  preOrder() {
    //root left right
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    }
  }
  postOrder() {
    //left right root
    if (this.root == null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    }
  }

  levelOrder() {
    let result = []; //we start by adding the root node to the queue
    let Q = [];
    if (this.root != null) {
      //root left right left right...
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left != null) {
          Q.push(node.left);
        }
        if (node.right != null) {
          Q.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

const bstObj = new BinarySearchTree();

bstObj.add(9);
bstObj.add(4);
bstObj.add(17);
bstObj.add(3);
bstObj.add(6);
bstObj.add(22);
bstObj.add(5);
bstObj.add(7);
bstObj.add(20);

console.log(bstObj.findMinHeight());
console.log(bstObj.findMaxHeight());
console.log(bstObj.isBalanced());
bstObj.add(10);
console.log(bstObj.findMinHeight());
console.log(bstObj.findMaxHeight());
console.log(bstObj.isBalanced());
console.log("inOrder: " + bstObj.inOrder());
console.log("preOrder: " + bstObj.preOrder());
console.log("postOrder: " + bstObj.postOrder());

console.log("levelOrder: " + bstObj.levelOrder());
