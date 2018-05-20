const objParent = {
  fucking: () => {
    console.log('biba fucking');
  }
}
const obj = {
  __proto__: objParent,
  'biba': 'fuck',
  fuck: 'biba'
};
console.log(Object.keys(obj));
for (let key in obj) {
  console.log(obj.hasOwnProperty(key));
}
console.log(Object.getOwnPropertyNames(obj));
obj.fucking();
