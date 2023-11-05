//properties of heap-
//left child = i*2 where i is the index
//right child = i*2+1
//parent = i/2
let MinHeap = function() {
	
	let heap = [null];
	
	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1; //finding the last index in the heap
			while (heap[idx] < heap[Math.floor(idx/2)]) { //parent equation //if the last element inserted is less than its parent we need to move it up
				//as the smallest numbers have to be at top in the min heap
                if (idx >= 1) { //if we havent reached the root node
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]]; //switching the node inserted with the parent node
					if (Math.floor(idx/2) > 1) { //if the parent node is not the root node
						idx = Math.floor(idx/2); //set the index to parent nodes 
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1]; //always gonna remove the top node i .e the smallest node
		if (heap.length > 2) { //means there is more than 1 node in the tree
			heap[1] = heap[heap.length - 1]; //last node of the array get moved to the first node
			heap.splice(heap.length - 1); //shortens the array by 1 //just removed the void of the last index
			if (heap.length == 3) { //if only 2 numbers are there in the tree
				if (heap[1] > heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]]; //if one is bigger than the other we just switch them
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] >= heap[left] || heap[i] >= heap[right]) { //if root node is more than the left child and right child
				if (heap[left] < heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]]; //switch the root node with the left node
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]]; //switch the root node with the right node
					i = 2 * i + 1; 
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) { //means if we are on the bottom of the tree
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};
  
	this.sort = function() { //remove the element on top of the tree and push onto the result and we are going to keep doing that until we have removed all the smallest element and put it on result
		let result = new Array();
		while (heap.length > 1) {
			result.push(this.remove()); //its gonna put the elements in order
		};
		return result;
	};

};

let MaxHeap = function() { //same reference for max heap
	
	let heap = [null];
	
	this.print = () => heap;

	this.insert = function(num) {
		heap.push(num);
		if (heap.length > 2) {
			let idx = heap.length - 1;
			while (heap[idx] > heap[Math.floor(idx/2)]) {
				if (idx >= 1) {
					[heap[Math.floor(idx/2)], heap[idx]] = [heap[idx], heap[Math.floor(idx/2)]];
					if (Math.floor(idx/2) > 1) {
						idx = Math.floor(idx/2);
					} else {
						break;
					};
				};
			};
		};
	};
	
	this.remove = function() {
		let smallest = heap[1];
		if (heap.length > 2) {
			heap[1] = heap[heap.length - 1];
			heap.splice(heap.length - 1);
			if (heap.length == 3) {
				if (heap[1] < heap[2]) {
					[heap[1], heap[2]] = [heap[2], heap[1]];
				};
				return smallest;
			};
			let i = 1;
			let left = 2 * i;
			let right = 2 * i + 1;
			while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
				if (heap[left] > heap[right]) {
					[heap[i], heap[left]] = [heap[left], heap[i]];
					i = 2 * i
				} else {
					[heap[i], heap[right]] = [heap[right], heap[i]];
					i = 2 * i + 1;
				};
				left = 2 * i;
				right = 2 * i + 1;
				if (heap[left] == undefined || heap[right] == undefined) {
					break;
				};
			};
		} else if (heap.length == 2) {
			heap.splice(1, 1);
		} else {
			return null;
		};
		return smallest;
	};

};

