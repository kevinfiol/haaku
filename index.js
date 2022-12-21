let PROXIES = [],
  CACHE = new WeakMap(),
  isArray = Array.isArray,
  isObj = x => x && Object.getPrototypeOf(x) === Object.prototype;

let handler = {
  get(target, name, receiver, _value) {
    if (!Object.hasOwn(target, name) || isArray(target) && name === 'length')
      return Reflect.get(target, name, receiver)

    if (CACHE.has(_value = target[name]))
      return CACHE.get(_value)

    let isArr = isArray(_value),
      dive = isObj(_value) || isArr;

    if (isArr) target[name] = [ ..._value ];
    else if (dive) target[name] = { ..._value };

    return dive ? makeProxy(target[name]) : _value;
  }
}

function makeProxy(target, _proxy) {
  _proxy = CACHE.get(target) || new Proxy(target, handler)
  if (!CACHE.has(target)) PROXIES.push(target) && CACHE.set(target, _proxy);
  return _proxy;
}

export function from(obj, fn) {
  let tmp, newObj = isArray(obj) ? [ ...obj] : isObj(obj) ? { ...obj } : 0;
  if (!newObj) throw Error('You can only copy objects or arrays.');
  fn(makeProxy(newObj));
  while (tmp = PROXIES.pop()) CACHE.delete(tmp);
  return newObj;
}