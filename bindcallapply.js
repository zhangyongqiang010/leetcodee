// bind的几个特性
// 1. 指定this
// 2. 返回一个函数
// 3. 可以传参
// 4. 函数柯里化

Function.prototype.bind = function (contenx) {
  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    var funArgs = Array.prototype.slice.call(arguments); // 柯里化的时候传参
    self.apply(contenx, args.concat(funArgs));
  };
};

// call 的特性
// 1.指定this
// 2.调用指定方法
// 3.可以传参,第一个参数不传表示 window, 参数是字符串的形式

Function.prototype.call = function (context) {
  context = context ? Object(context) : window;
  context.fn = this;
  let args = [];
  for (let i = 1, l = arguments.length; i < l; i++) {
    args.push("arguments[" + i + "]");
  }
  // console.log("context.fn(" + args + ")");
  let r = eval("context.fn(" + args + ")");
  delete context.fn;
  return r;
};

// apply 的特性
Function.prototype.apply = function (context) {
  context = context ? Object(context) : window;
  context.fn = this;
  let args = arguments.slice(1);
  let r = context.fn(args);
  delete context.fn;
  return r;
};

function mockNew() {
  let obj = {};
  let self = [].shift.call(arguments); // 获取this
  obj.__proto__ = self.prototype;
  let r = self.apply(obj, arguments);
  return r instanceof Object ? r : obj;
}
