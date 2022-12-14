let handler = {
  get(obj, k) {
    let dive = false,
      v = obj[k];

    if (v && Object.getPrototypeOf(v) === Object.prototype) {
      obj[k] = { ...v };
      dive = true;
    }
    
    if (Array.isArray(v)) {
      obj[k] = [ ...v ];
      dive = true;
    }

    return dive ? new Proxy(obj[k], handler) : v;
  }
};

export function from(obj, fn) {
  let n = { ...obj };
  fn(new Proxy(n, handler));
  return n;
}