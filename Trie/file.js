let Node = function() {
	this.keys = new Map(); //key value pair structure
	this.end = false; //to check if it is the end letter of the word
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};

let Trie = function() {

	this.root = new Node();

	this.add = function(input, node = this.root) {
		if (input.length == 0) {
			node.setEnd();
			return;
		} else if (!node.keys.has(input[0])) { //if there is not a node already present containing the initial letter of the passed word
			node.keys.set(input[0], new Node()); //then we will create a node of that particular letter
			return this.add(input.substr(1), node.keys.get(input[0])); //every letter after the 1st letter will be passed here
		} else {
			return this.add(input.substr(1), node.keys.get(input[0]));
		};
	};

	this.isWord = function(word) {
		let node = this.root;
		while (word.length > 1) {
			if (!node.keys.has(word[0])) { //checking if there is a node containing the 1st letter
				return false;
			} else {
				node = node.keys.get(word[0]); //setting the node to the initial letter
				word = word.substr(1);
			};
		};
		return (node.keys.has(word) && node.keys.get(word).isEnd()) ? //if it has the last letter of the word we passed in and it is the end, then true ,else false
      true : false;
	};

	this.print = function() { //to print all the words in a trie
		let words = new Array();
		let search = function(node, string) {
			if (node.keys.size != 0) {
				for (let letter of node.keys.keys()) {
					search(node.keys.get(letter), string.concat(letter));
				};
				if (node.isEnd()) {
					words.push(string);
				};
			} else {
				string.length > 0 ? words.push(string) : undefined;
				return;
			};
		};
		search(this.root, new String());
		return words.length > 0 ? words : mo;
	};

};

myTrie = new Trie()
myTrie.add('hey'); 
myTrie.add('hello'); 
myTrie.add('riya'); 
myTrie.add('river'); 
myTrie.add('do'); 
myTrie.add('dorm')
myTrie.add('send')
myTrie.add('sense')
console.log(myTrie.isWord('doll'))
console.log(myTrie.isWord('dorm'))
console.log(myTrie.isWord('sense'))
console.log(myTrie.print())