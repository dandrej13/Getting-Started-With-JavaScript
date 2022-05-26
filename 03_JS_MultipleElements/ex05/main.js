
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];

theList.shift();
theList.pop();
console.log(theList);

theList.unshift("FIRST");
console.log(theList);

theList.splice(3, 4, "hello World");
console.log(theList);