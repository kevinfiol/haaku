let AUTO_FREEZE = false,
  isObj = x => x && Object.getPrototypeOf(x) === Object.prototype,
  isArr = Array.isArray;

let deepFreeze = obj => {
  let dive = isObj(obj) || isArr(obj);
  if (dive) for (let i in obj) deepFreeze(obj[i]);
  return dive ? Object.freeze(obj) : obj;
};

let handler = {
  get(obj, k) {
    let v = obj[k],
      dive = isObj(v) || isArr(v);

    if (isArr(v)) obj[k] = [ ...v ];
    else if (dive) obj[k] = { ...v };

    return dive ? new Proxy(obj[k], handler) : v;
  }
};

export const setAutoFreeze = x => AUTO_FREEZE = x || false;

export function from(obj, fn) {
  let n = { ...obj };
  fn(new Proxy(n, handler));
  return AUTO_FREEZE ? deepFreeze(n) : n;
}