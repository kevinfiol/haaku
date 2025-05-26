let isArray = Array.isArray,
  isObj = x => x && Object.getPrototypeOf(x) === Object.prototype,
  init = x => {
    x = isArray(x) ? [ ...x ] : isObj(x) ? { ...x } : 0;
    if (!x) throw Error('haaku: must merge array or object');
    return x;
  };

export function merge(obj, ...patches) {
  obj = init(obj);

  for (let patch of patches) {
    for (let k in patch) {
      let v = patch[k];
      if (typeof v === 'function') obj[k] = v(obj[k]);
      else if (isObj(v) && isObj(obj[k])) obj[k] = merge(obj[k], v);
      else if (v === void 0) delete obj[k];
      else obj[k] = v;
    }
  }

  return obj;
}
