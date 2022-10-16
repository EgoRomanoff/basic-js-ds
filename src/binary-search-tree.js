const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.rootNode
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = createNode(this.rootNode, data)

    function createNode(node, value) {
      if (!node) return new Node(value)
      if (value === node.data) return node

      value < node.data && (node.left = createNode(node.left, value))
      value > node.data && (node.right = createNode(node.right, value))

      return node
    }
  }

  #searchNode(node, value) {
    if (!node) return null
    if (value < node.data) return this.#searchNode(node.left, value)
    if (value > node.data) return this.#searchNode(node.right, value)
    return node
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.#searchNode(this.rootNode, data) ? true : false

  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.#searchNode(this.rootNode, data)
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rootNode = removeNode(this.rootNode, data)

    function removeNode(node, value) {
      if (!node) return null

      if (value !== node.data) {
        value < node.data && (node.left = removeNode(node.left, value))
        value > node.data && (node.right = removeNode(node.right, value))
        return node
      } else {
        if (!node.left && !node.right) return null
        if (!node.left) return node = node.right
        if (!node.right) return node = node.left

        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeNode(node.right, minFromRight.data)

        return node
      }
    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootNode) return

    let node = this.rootNode
    while (node.left) {
      node = node.left
    }

    return node.data
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rootNode) return

    let node = this.rootNode
    while (node.right) {
      node = node.right
    }

    return node.data
  }
}

const tree = new BinarySearchTree();
      tree.add(2);
      tree.add(7);
      tree.add(1);
      tree.add(8);
      tree.add(4);
      tree.add(32);
      tree.add(12);
      tree.add(14);
      console.log(tree.find(8).data);
      console.log(tree.find(2).data);
      console.log(tree.find(32).data);
      console.log(tree.find(14).data);

module.exports = {
  BinarySearchTree
};