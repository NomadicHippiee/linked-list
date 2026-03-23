export default class linkedList {
    constructor() {
        this._head = null;
        this.length = 0;
    }

    append(value) {
        let newNode = new Node(value, null);

        if (this._head === null) {
            this._head = newNode;
        } else {
            let currentNode = this._head;

            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }

        this.length = this.length + 1;
    }
    prepend(value) {
        let newNode = new Node(value, null);

        if (this._head === null) {
            this._head = newNode;
        } else {
            newNode.next = this._head;
            this._head = newNode;
        }

        this.length = this.length + 1;
    }
    size() {
        return this.length;
    }
    head() {
        if (this._head === null) {
            return undefined;
        } else {
            return this._head.value;
        }
    }
    tail() {
        if (this._head === null) {
            return undefined;
        }
        let currentNode = this._head;

        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }

        return currentNode.value;
    }
    toString() {
        if (this._head === null) {
            return "";
        }

        let result = "";
        let currentNode = this._head;

        while (currentNode !== null) {
            result +=  "( " + currentNode.value + " ) -> ";
            currentNode = currentNode.next;
        }

        result = result + "null";

        return result;
    }
}

class Node {
    constructor(value = null , next = null) {
        this.value = value;
        this.next = next;

    }
}