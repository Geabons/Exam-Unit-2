import { createRequire } from "module";
const require = createRequire(import.meta.url);
const arr = require("../Exam-Unit-2/example_files/arrays.json"); 

function flatten(array){
    return array.flatMap((array) => {
        if (Array.isArray(array) && array.some(Array.isArray)) {
          return flatten(array);
        }
        return array;
      });
}

console.log(flatten(arr));