let isObj = x => x && Object.getPrototypeOf(x) === Object.prototype;

export function merge(o, ...patches) {
  o = Array.isArray(o) ? [ ...o ] : isObj(o) ? { ...o } : 0;
  if (!o) throw Error('haaku: must merge array or object');

  for (let patch of patches) {
    for (let k in patch) {
      let v = patch[k];
      if (typeof v === 'function') o[k] = v(o[k]);
      else if (isObj(v) && isObj(o[k])) o[k] = merge(o[k], v);
      else if (v === void 0) delete o[k];
      else o[k] = v;
    }
  }

  return o;
}
