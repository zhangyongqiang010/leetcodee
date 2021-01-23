// setTimeOut 模拟一setInterval

function intervalFun(callBack, wait) {
  // callBack();
  let timer = setTimeout(function () {
    callBack();
    intervalFun(callBack, wait);
    // if (timer) clearTimeout(timer);
    timer = null;
  }, wait);
  return timer;
}
const tt = intervalFun(() => {
  console.log(1);
}, 1000);

function intervalFun(callBack, wait) {
  let timer = null;
  function fn() {
    callBack();
    let prevTimer = timer;
    timer = setTimeout(fn, wait);
    clearTimeout(prevTimer);
  }
  return setTimeout(fn, wait);
}
const time = intervalFun(() => {
  console.log(1);
}, 1000);
clearTimeout(time);
