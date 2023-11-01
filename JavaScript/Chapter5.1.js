function print(obj) {
  console.log(obj)
}

const now = new Date();
const d = new Date(1694707200000);
print(d);
print(now);
// Date.parse()
const d1 = Date.parse("09/15/2023"); // [1694707200000] 2023-09-15 00:00:00
const d2 = Date.parse("2023-09-15T00:00:00.000Z")
print(d1)
print(d2)
print(new Date("2023-09-15T00:00:00.000Z"))
// Date.UTC()
print(Date.UTC(2023, 8, 15, 0, 0, 0))
print(new Date(Date.UTC(2023, 8, 15, 0, 0, 0)))
print(new Date(2023, 8, 15, 0, 0, 0)) // 与 Date.parse()一样，Date.UTC()也会被 Date 构造函数隐式调用，但有一个区别:这种情况 下创建的是本地日期，不是 GMT 日期。
// Date.now()
print(Date.now()) // 使用本地日期，而不是GMT

// toLocaleString(), toString(), valueOf()
const date1 = new Date(Date.UTC(2023, 9, 10, 12, 0, 0));
print(date1.toLocaleString());
print(date1.toString());
print(date1.valueOf());