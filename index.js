let PROXIES, CACHE,
  isArray = Array.isArray,
  isObj = x => x && Object.getPrototypeOf(x) === Object.prototype,
  init = x => {
    x = isArray(x) ? [ ...x ] : isObj(x) ? { ...x } : 0;
    if (!x) throw Error('You can only copy objects or arrays.');
    return x;
  };

function makeProxy(target, _proxy) {
  PROXIES = PROXIES || [];
  CACHE = CACHE || new WeakMap();

  _proxy = CACHE.get(target) || new Proxy(target, {
    get(target, name, receiver, _value, _dive) {
      if (!Object.hasOwn(target, name) || isArray(target) && name === 'length')
        return Reflect.get(target, name, receiver);

      if (CACHE.has(_value = target[name]))
        return CACHE.get(_value);

      if (_dive = isArray(_value)) target[name] = [ ..._value ];
      else if (_dive = isObj(_value)) target[name] = { ..._value };

      return _dive ? makeProxy(target[name]) : _value;
    }
  });

  if (!CACHE.has(target)) PROXIES.push(target) && CACHE.set(target, _proxy);
  return _proxy;
}

export function from(obj, fn, _tmp) {
  fn(makeProxy(obj = init(obj)));
  while (_tmp = PROXIES.pop()) CACHE.delete(_tmp);
  return obj;
}

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