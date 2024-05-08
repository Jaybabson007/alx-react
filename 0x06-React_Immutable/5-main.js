import { concatElements, mergeElements } from "./5-merge.js";

const array1 = ['Jin', 'Kazama'];
const array2 = ['Jason', 'Statham'];

const object1 = {
    1: 'Lola',
    2: 'Josh',
    3: 'Abel',
};
const object2 = {
    4: 'Joel',
    5: 'Barry',
    6: 'John',
};

const concated = concatElements(array1, array2);
console.log(concated);
console.log(concated.toJS());

const merged = mergeElements(object1, object2);
console.log(merged);
console.log(merged.toJS());
