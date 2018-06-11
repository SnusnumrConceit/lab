const set1 = new Set([1, 2, 3, 3, 4, 5]);

console.log(set1);
console.log(set1.has(1));

console.log(set1.has(5));

console.log(set1.has(4));

console.log(set1.has(6));

console.log(set1.length);
console.log(set1.size);

set1.add('biba');
console.log(set1);
set1.clear();
console.log(set1);

console.log('---- new set -----');
const myNewSet = new Set();
myNewSet.add(1);
myNewSet.add(2);
myNewSet.add('some text');
myNewSet.add({value1: 'value1', value2: 'value2'})

for (const [value, index] of myNewSet.entries()) {
  console.log('value:' + value);
  if (index === 'some text') {
    myNewSet.delete(index);
  }
  console.log(myNewSet.has(index));
  // console.log('index:' + index);
}
console.log('--- after iteration ---');
console.log(myNewSet);

console.log('--- start new iteration keys ---');
for (let item of myNewSet.keys()) {
  console.log(item);
}

console.log('--- start new iteration values ---');
for (let item of myNewSet.values()) {
  console.log(item);
}

console.log('--- start new iteration entries ---');
for (let item of myNewSet.entries()) {
  console.log(item);
}

console.log('--- convert set to array with array from ---');
const myNewArr = Array.from(myNewSet);
console.log(myNewArr);

// simulated intersect
const intersection = new Set([...myNewSet].filter(x => set1.has(x)));
console.log(intersection);

// simulated intersect
const difference = new Set([...myNewSet].filter(x => ! set1.has(x)));
console.log(difference);
