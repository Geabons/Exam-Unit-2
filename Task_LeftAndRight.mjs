import { createRequire } from "module";
const require = createRequire(import.meta.url);
const leftNRight = require("../Exam-Unit-2/example_files/nodes.json");

function processTree(root) {
    let Sum = 0;
    let Depth = 0;
    let nodes = 0;
    
    function traverse(node, depth) {
        if (!node) return;
        
        Sum += node.value;
        nodes++;
        Depth = Math.max(Depth, depth);
        
        traverse(node.left, depth + 1);
        traverse(node.right, depth + 1);
    }
    
    traverse(root, 1);
    return { Sum, Depth, nodes };
}

console.log(processTree(leftNRight));
