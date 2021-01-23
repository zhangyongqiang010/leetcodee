Function.prototype.bind = function (context) {
  const arg = arguments;
  context.fn = this;
  return function (...innerArg) {
    context.fn(...[].slice.call(arg, 1).concat(innerArg));
  };
};

Function.prototype.call = function (context) {
  context = context ? Object(context) : window;
  context.fn = this;
  let r = context.fn(...Array.from(arguments).slice(1));
  delete context.fn;
  return r;
};

function fnq(a, b, c) {
  // console.log(this.a);
  console.log(a, b, c);
  return a;
}

const o = {
  a: 1,
};

fnq.call(o, 1, 2, 3);
