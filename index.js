let handler = {
  get(obj, k) {
    let v = obj[k],
      isArr = Array.isArray(v),
      dive = v && Object.getPrototypeOf(v) === Object.prototype || isArr;

    if (isArr) obj[k] = [ ...v ];
    else if (dive) obj[k] = { ...v };

    return dive ? new Proxy(obj[k], handler) : v;
  }
};

export function from(obj, fn) {
  let n = { ...obj };
  fn(new Proxy(n, handler));
  return n;
}