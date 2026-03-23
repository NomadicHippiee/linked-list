# Linked List Implementation

A JavaScript implementation of a Linked List data structure, following The Odin Project curriculum.

## Overview

This project implements a `LinkedList` class with a `Node` class that allows you to create and manipulate linked lists with various operations.

## Features

### Core Methods

- `append(value)` - Add a node to the end of the list
- `prepend(value)` - Add a node to the start of the list
- `size()` - Get the total number of nodes in the list
- `head()` - Get the value of the first node
- `tail()` - Get the value of the last node
- `at(index)` - Get the value at a specific index
- `pop()` - Remove and return the first node's value
- `contains(value)` - Check if a value exists in the list
- `findIndex(value)` - Get the index of a value in the list
- `toString()` - Get a string representation of the list

### Extra Credit Methods

- `insertAt(index, ...values)` - Insert one or more values at a specific index
- `removeAt(index)` - Remove a node at a specific index

## How to Test

1. Open `main.js` and add test cases for the LinkedList methods
2. Run the following command:
   ```bash
   node main.js
   ```
3. View the output in your terminal

## Example Usage

```javascript
import linkedList from "./linkedList.js";

const list = new linkedList();

list.append("dog");
list.append("cat");
list.append("parrot");

console.log(list.toString());  // ( dog ) -> ( cat ) -> ( parrot ) -> null
console.log(list.size());      // 3
console.log(list.head());      // dog
console.log(list.contains("cat"));  // true
```
