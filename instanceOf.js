function myInstanceOf(left, right) {
  // 基本数据类型直接返回false
  if (typeof left !== "object" || left === null) return false;
  // getPrototypeOf 能拿到参数的原型对象
  let proto = Object.getPrototypeOf(left);
  while (true) {
    // 没找到原型对象
    if (proto === null) return false;
    // 找到相同的原型对象
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

// instance of 重写，， 判断基本数据类型
class PrimitiveNumber {
  static [Symbol.hasInstance](x) {
    return typeof x === "number";
  }
}

111 instanceof PrimitiveNumber; // true
