class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = new TreeNode(1);
    }

    addNode(parentNode, value) {
        const newNode = new TreeNode(value);
        parentNode.children.push(newNode);
        return newNode;
    }

    initializeTree(rootNode, depth, maxNodes) {
        if (depth === 0 || maxNodes <= 0) return;

        for (let i = 0; i < maxNodes && rootNode.children.length < 10; i++) {
            const newNode = this.addNode(rootNode, 1);
            this.initializeTree(newNode, depth - 1, maxNodes - 1);
        }
    }
}

export { Tree, TreeNode };
