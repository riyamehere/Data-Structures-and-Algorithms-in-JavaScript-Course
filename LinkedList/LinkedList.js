function LinkedList() { 
    var length = 0; 
    var head = null; //keep the head null first
  
    var Node = function(element){
      this.element = element; //data part of the node
      this.next = null;  //link part of the node
    }; 
  
    this.size = function(){
      return length;
    };
  
    this.head = function(){
      return head;
    };
  
    this.add = function(element){
      var node = new Node(element);
      if(head === null){
          head = node;
      } else {
          var currentNode = head; //put heads value in temp variable
  
          while(currentNode.next){
              currentNode  = currentNode.next; //go to the next link of head 
          }
  
          currentNode.next = node; //put the value 
      }
  
      length++; //keeps the check of number of elements in list
    }; 
  
    this.remove = function(element){
      var currentNode = head;
      var previousNode;
      if(currentNode.element === element){ //when head node is the element we want to remove
          head = currentNode.next; 
      } else {
          while(currentNode.element !== element) { //keep going through this while loop and keep jumping to next element
              previousNode = currentNode; 
              currentNode = currentNode.next;
          }
  
          previousNode.next = currentNode.next; // previos node's link is is now made as the next nodes's link so the middle elements gets removed
      }
  
      length --;
    };
    
    this.isEmpty = function() {
      return length === 0;
    };
  
    this.indexOf = function(element) {
      var currentNode = head;
      var index = -1;
  
      while(currentNode){
          index++;
          if(currentNode.element === element){
              return index;
          }
          currentNode = currentNode.next; //traversing the entire list till the element matches current node
      }
  
      return -1;
    };
  
    this.elementAt = function(index) {
      var currentNode = head;
      var count = 0;
      while (count < index){ //loop goes on till we don't get the required index
          count ++;
          currentNode = currentNode.next
      }
      return currentNode.element;
    };
    
    
    this.addAt = function(index, element){
      var node = new Node(element);
  
      var currentNode = head;
      var previousNode;
      var currentIndex = 0;
  
      if(index > length){ //entered index is way too larger than length of the list
          return false;
      }
  
      if(index === 0){ //when we got element at head node
          node.next = currentNode;
          head = node;
      } else {
          while(currentIndex < index){ //will go through each index until we find the correct index
              currentIndex++;
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
          node.next = currentNode;
          previousNode.next = node;
      }
      length++;
    }
    
    this.removeAt = function(index) {
      var currentNode = head;
      var previousNode;
      var currentIndex = 0;
      if (index < 0 || index >= length){ //mean entered index is out of bound of the list
          return null
      }
      if(index === 0){
          head = currentNode.next;
      } else {
          while(currentIndex < index) {
              currentIndex ++;
              previousNode = currentNode;
              currentNode = currentNode.next;
          }
          previousNode.next = currentNode.next
      }
      length--;
      return currentNode.element;
    }
  
  } 
  
  var ll = new LinkedList();
  ll.add('Kitten');
  ll.add('Puppy');
  ll.add('Dog');
  ll.add('Cat');
  ll.add('Fish');
  console.log(ll.size());
  console.log(ll.removeAt(3));
  console.log(ll.elementAt(3));
  console.log(ll.indexOf('Puppy'));
  console.log(ll.size());
