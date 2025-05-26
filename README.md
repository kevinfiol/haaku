# haaku

Immutable state update utilities.

```shell
npm install haaku
```

[Try on Flems.io](https://flems.io/#0=N4IgtglgJlA2CmIBcBGADGgNCAZhBAzsgNqgB2AhmIkiAHQAWALmLCNgMYD2ZT8vyECAC+mclRr0AVkU48+A2hDAAHLgCcmAAmBbq6gObxMWleq5QArh3hbhWnObBaA5AwoUA1pZcBuADpkgdxkBNoq8FwqCFoAvDqBWlqe8ABuEGRIOloURlkATACcJhFMBFnELmC5BhDwLgC6JkzqFAQMWS7q8GBcqT31JqKJWq04FPCwWbq58FkAzCgl8GUVLjiwEEwcDC4mbl4+DXaBwgFBZCFhWnxhKHGm5lY2ABQRUQgmUGPasQB8CTISW+FBwTDoKXSZDoswe8zQ52BPwhaQydFKBHRlnaLxcLQgAA86i4AJSIrRQSYrWwgsEoqF0FptBjnYRkwLBHjXW5MfIPfRGN6RaLGQFJSEZaYjJKzBZYaVaAD0iq02NsOEslyYEB4pgo2wY8AINy4qpUUH1tgojyi8E0AE8tAAjNrwKBaXVbY1mVFcbFaVIUWCWeAKjFZN7dVIkuIA4h0BM+1L7fFE+pNBXKrQEFY5G0RB0mrQAA01lLwZDdxaL3V6-S0WwcThuho9Tqk8A4TAVTPaWTL8ArbpGwlO7IuWcrAHc2x2uw3jRxupaoJzQlwEHRYFwDLj2n7YO6neqgzmkHtTMKYrEbzcjUwUGSlSrxrAc2uCBv4Fud3uGAejxPN85gvd4RTiW8eXyJ8s1fd8JxVDQIFqShYFnTttFrCgMmNTUwEsJgVw-L8f13Fx90sQ9nVsIpz2WD5vwlaFZhglUimIzdtzIiiqOPLRiH8fwqhqOpBMaOjLwY+k0QxVj+OEgxanTDkyCzTUdgoMgjHdbocDtfgbGNChui0fwQHaYzhxADjvy4v8AOom51BDCSwM3MYJjQm94h5FA6A8yY5JaEMbNI+zKMApyXNAq9vwCrzIPvfJ-NBTyguc0MEK0DStLddCu2NAAyHJ1Fae1jSnfA0O6DhLHUAgIH6WBHT4jht0rVdLi5Ei7PI-8IscuCQPokVpKBby7zuMaY1g09MquHrfz6hy+KG1zYrGiCfKS6bnwcOaVIWzilp4yL4Qk3yxphIxmh2pjrvgOT4VC3rTscgShOqRTRKEkwxNTH7xIvS77oxW6wmS0GVgIOTKi+pSLzxdRCWJBoVKzFJyuzfreNsWs+jysxbXUZqXpOnHIuCwZXF7XYGyBNzGNRMhxyO2zyZWoCc0R2mXHpyaH2m842bC5aBtWuaedado+YyAXIeZsl2HMqkux1UJBDQJB5kKEQxBAShqEEOgOAIWQQBCBQmEEEQGmEIA)

## API

### `merge(obj: Object, ...patches: Object[]): Object`

`merge` accepts two or more arguments:

1. An object that will be used as the base; this object will remain unmutated
2. Any number of object patches; each patch will recursively be merged with the base state

`merge` uses structural sharing. This means references that are not changed by patches are *shared* between the source and resulting object.

Example:
```js
import { merge } from 'haaku';

const people = {
  kevin: { age: 29, pets: ['maggie'], trash: 'removeme', },
  rafael: { age: 31, pets: ['flitch', 'haku'] }
};

const updated = merge(people, {
  kevin: {
    age: 30,
    // use function patches to update a property based on its previous value
    pets: prev => [...prev, 'trixie'],
    // set a property to `undefined` to remove it from the object
    trash: undefined
  }
});

// new object is created
console.log(people === updated); // false

// original object remains unmutated
console.log(people.kevin.age); // 29
console.log(people.kevin.pets); // ['maggie']
console.log('trash' in people.kevin); // true

// unchanged references are "shared"
console.log(people.rafael === updated.rafael); // true
```

### `produce(obj: Object, (draft: Proxy) => undefined): Object`

`produce` accepts two arguments:

1. An object that will be used as the base; this object will remain unmutated
2. A recipe function to produce a new object

`produce` is a thin wrapper over [klona](https://github.com/lukeed/klona) that provides [Immer](https://github.com/immerjs/immer)-like functionality using deep object cloning. This means `produce` does not use structural sharing.

Example:
```js
import { merge } from 'haaku';

const people = {
  kevin: { age: 29, pets: ['maggie'], trash: 'removeme', },
  rafael: { age: 31, pets: ['flitch', 'haku'] }
};

const updated = produce(people, draft => {
  draft.kevin.age = 30;
  draft.kevin.pets.push('trixie');
  delete draft.kevin.trash;
});

// new object is created
console.log(people === updated); // false

// original object remains unmutated
console.log(people.kevin.age); // 29
console.log(people.kevin.pets); // ['maggie']
console.log('trash' in people.kevin); // true

// unchanged references are NOT "shared"
console.log(people.rafael === updated.rafael); // false
```

#### Caveats

`merge` will not deep merge nested arrays:

```js
const a = { nums: [1, 2, 3] };
const b = merge(a, { nums: [4, 5, 6] });
console.log(b); // { nums: [4, 5, 6] }
```

In cases where you'd like to make changes to an existing array, you can use the spread operator in conjunction with function patches:

```js
const a = { nums: [1, 2, 3] };
const b = merge(a, { nums: prev => [...prev, 4, 5, 6] });
console.log(b); // { nums: [1, 2, 3, 4, 5, 6] }
```

If you require more robust functionality for merging arrays, I recommend [deepmerge](https://github.com/TehShrike/deepmerge#arraymerge) and its `arrayMerge` utilities.

Note that function patches will be passed original references. Mutating these will mutate the original object:

```js
const a = { nums: [1, 2, 3] };

const b = merge(a, {
  nums: prev => {
    prev.push(4); // don't do this
    return prev;
  }
});

console.log(a); // { nums: [1, 2, 3, 4] } The original object has been mutated! :(
console.log(b); // { nums: [1, 2, 3, 4] }
```

In cases where you'd like the benefits of mutable objects without mutating the base object, you can nest `produce`:

```js
import { produce, merge } from 'haaku';

const a = { nums: [1, 2, 3] };

const b = merge(a, {
  nums: prev => produce(prev, draft => {
    draft.push(4);
  })
});

console.log(a); // { nums: [1, 2, 3] } The original object is not mutated :)
console.log(b); // { nums: [1, 2, 3, 4] }
```

## Credits

Thank you [pygy](https://github.com/pygy) for his wisdom in fixing a major bug. Inspired by [vegemite](https://github.com/lukeed/vegemite) and [mergerino](https://github.com/fuzetsu/mergerino).
