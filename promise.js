// promise 的特性
// 1. new 实例化
// 2. 链式调用
// 3. 原型方法
// 4. 静态方法

class Promise {
  // callbacks = [];
  constructor(fn) {
    this.callbacks = [];
    this.state = "pending";
    this.value = null;
    fn(this._resolve.bind(this));
  }
  then(onFulfilled) {
    if (this.state === "pending") {
      this.callbacks.push(onFulfilled);
    } else {
      onFulfilled(this.value);
    }

    return this;
  }
  _resolve(value) {
    this.state = "fullFilled";
    this.value = value;
    this.callbacks.forEach((fn) => fn(value));
    // setTimeout(() => {
    //   this.callbacks.forEach((fn) => fn(value));
    // });
  }
}

let p = new Promise((resolve) => {
  setTimeout(() => {
    console.log("done");
    resolve("5秒");
  }, 5000);
}).then((tip) => {
  console.log(tip);
});
