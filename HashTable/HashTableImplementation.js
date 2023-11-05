var hash = (string, max) => {
  //max is the number of buckets that we r using in our hash table to store values
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i); //adding up the character code for each character in the string and putting into the hash
  }
  return hash % max;
};

let HashTable = function () {
  let storage = [];
  const storageLimit = 14;

  this.print = function () {
    console.log(storage);
  };

  this.add = function (key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      //if there is nothing in that index we will put this key,value pair there
      storage[index] = [[key, value]];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        //going through each index to see if the key already exists
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value; //if the key already exists we  gonna set the new value here
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      //means if only 1 item and there and the item in that bucket equals the key that you passed in, so we can just delete that index
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        //means there are probably few more items in that index
        if (storage[index][i][0] === key) {
          //and we only want to delete the item associated with that key
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function (key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined; //means item is not in that hash table
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        //going through each element of bucket
        if (storage[index][i][0] === key) {
          //and if the element equal to key then we can return the element
          return storage[index][i][1];
        }
      }
    }
  };
};

console.log(hash("quincy", 10));
//passing number of buckets as 10
let ht = new HashTable();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosour");
ht.add("tux", "penguin");
console.log(ht.lookup("tux"));
ht.print();
