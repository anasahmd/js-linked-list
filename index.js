class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
		this.tail = null;
	}

	append(value) {
		const newNode = new Node(value);
		if (this.size == 0) {
			this.head = newNode;
		}

		//If there is a tail, Update that tail's tail to the newNode
		if (!(this.tail == null)) this.tail.addTail(newNode);

		//Update the tail of list
		this.tail = newNode;

		this.size++;
	}

	prepend(value) {
		const newNode = new Node(value);

		if (this.size == 0) {
			this.tail = newNode;
		}

		newNode.addTail(this.head);

		this.head = newNode;
		this.size++;
	}

	size() {
		return this.size;
	}

	head() {
		return this.head;
	}

	tail() {
		return this.tail;
	}

	at(index) {
		let value = this.head;
		if (value) {
			for (let i = 0; i < index; i++) {
				value = value.tail;
			}
			return value;
		}
		return null;
	}

	pop() {
		if (this.size > 1) {
			//Sets the secondlast node's tail to null and update's list's tail to secondlast
			const secondLast = this.at(this.size - 2);
			let returnValue = this.tail;
			this.size -= 1;
			this.tail = secondLast;
			secondLast.tail = null;
			return returnValue.value;
		} else if (this.size == 1) {
			//Resets the list and returns the popped item
			let returnValue = this.tail;
			this.head = null;
			this.size = 0;
			this.tail = null;
			return returnValue.value;
		} else if (this.size == 0) {
			return 'Nothing to pop!';
		}
	}

	contains(value) {
		let node = this.head;
		for (let i = 0; i < this.size; i++) {
			console.log('hello');
			if (node.value == value) {
				return true;
			}
			node = node.tail;
		}
		return false;
	}

	find(value) {
		let node = this.head;
		for (let i = 0; i < this.size; i++) {
			console.log('hello');
			if (node.value == value) {
				return i;
			}
			node = node.tail;
		}
		return null;
	}

	toString() {
		let string = '';
		let node = this.head;
		while (node && node.value) {
			string = string + `( ${node.value} )` + ' -> ';
			node = node.tail;
		}
		string = string + 'null';
		return string;
	}
}

class Node {
	constructor(value) {
		this.value = value || null;
		this.tail = null;
	}

	addTail(tail) {
		this.tail = tail;
	}
}

const list = new LinkedList();
list.prepend('Bye');
list.prepend('Hii');

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.toString());
console.log(list.tail);
