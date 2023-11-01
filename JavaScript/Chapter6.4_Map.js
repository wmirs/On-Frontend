// Map初始化
const m1 = new Map();
const m2 = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"]
]);
const m3 = new Map({
  [Symbol.iterator]: function*() {
    yield ["key1", "val1"];
    yield ["key3", "val3"];
    yield ["key2", "val2"];
  }
});
const m4 = new Map([ [] ]);

console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);

// set(), get(), has(), delete(), clear(), size属性