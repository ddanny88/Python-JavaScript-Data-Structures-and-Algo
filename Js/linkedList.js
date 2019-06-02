// Singly Linked List written in JavaScript.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class List {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length --;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;
        this.head = oldHead.next;
        this.length --;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length ++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let current = this.head;
        let count = 0;
        while (count !== index) {
            current = current.next;
            count ++;
        }
        return current;
    }

    set(index, val) {
        let target = this.get(index);
        if (target) {
            target.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.unshift(val);
        if (index === this.length) return this.push(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return this;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        let prev = this.get(index - 1);
        let target = prev.next;
        let temp = target.next;
        prev.next = temp;
        this.length --;
        return target;
    }

    reverse() {
        if (!this.head) return undefined;
        let node = this.head;
        this.head = this.tail;
        this.tial = node;
        let prev = null;
        let next;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}