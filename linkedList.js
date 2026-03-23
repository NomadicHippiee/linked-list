export default class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        let newNode = new Node(value, null);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let currentNode = this.head;

            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }

        this.length = this.length + 1;
    }
    prepend(value) {
        let newNode = new Node(value, null);

        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length = this.length + 1;
    }
    toString() {
        if (this.head === null) {
            return "";
        }

        let result = "";
        let currentNode = this.head;

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