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
    at(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        let currentNode = this._head;
        let currentIndex = 0;

        while (currentIndex < index) {
            currentNode = currentNode.next;
            currentIndex = currentIndex + 1; 
        }

        return currentNode.value;

    }
    pop() {
        if (this._head === null) {
            return undefined;
        }

        let valueToReturn = this._head.value;

        this._head = this._head.next;

        this.length = this.length - 1;

        return valueToReturn;
    } 
    contains(value) {
        let currentNode = this._head;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }

        return false;
    }
    findIndex(value) {
        let currentNode = this._head;
        let currentIndex = 0;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return currentIndex;
            }
            
            currentNode = currentNode.next;
            currentIndex = currentIndex + 1;
        }

        return -1
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
    insertAt(index, ...values) {
        if (index < 0 || index > this.length) {
            throw new RangeError;
        }

        values.forEach((value) => {
            let newNode = new Node(value, null);

            if (index === 0) {
                newNode.next = this._head;
                this._head = newNode;
                index = index + 1;
            } else {
                let currentNode = this._head;
                let currentIndex = 0;

                while (currentIndex < index - 1) {
                    currentNode = currentNode.next;
                    currentIndex = currentIndex + 1;
                }

                newNode.next = currentNode.next;
                currentNode.next = newNode;
                index = index + 1;

            }

            this.length = this.length + 1;
        })
    }
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            throw new RangeError;
        }

        if (index === 0) {
            this._head = this._head.next;
        } else {
            let currentNode = this._head;
            let currentIndex = 0;

            while (currentIndex < index -1) {
                currentNode = currentNode.next;
                currentIndex = currentIndex + 1;
            }

            currentNode.next = currentNode.next.next;
        }

        this.length = this.length - 1;
    }
}

class Node {
    constructor(value = null , next = null) {
        this.value = value;
        this.next = next;

    }
}