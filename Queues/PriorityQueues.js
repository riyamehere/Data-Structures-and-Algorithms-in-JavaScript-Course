function PriorityQueue() {
  var collection = [];
  this.printCollection = function () {
    console.log(collection);
  };
  this.enqueue = function (element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          //checking priorities (is the priority of the element we r passing in th queue less than the priority of the element int the collection)
          collection.splice(i, 0, element); //The splice() method overwrites the original array.
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function () {
    var value = collection.shift();
    return value[0];
  };
  this.front = function () {
    return collection[0];
  };
  this.size = function () {
    return collection.length;
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

var pq = new PriorityQueue();
pq.enqueue(["Hello", 2]);
pq.enqueue(["Riya", 3]);
pq.enqueue(["nagpur", 1]);
pq.enqueue(["hiii", 2]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
