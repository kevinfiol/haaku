# haaku

Immutable state update utilities.

```shell
npm install haaku
```

[Try on Flems.io](https://flems.io/#0=N4IgtglgJlA2CmIBcBGADGgNCAZhBAzsgNqgB2AhmIkiAHQAWALmLCNgMYD2ZT8vyECAC+mclRr0AVkU48+A2tzIEmAAmBqcAJy5hMa6toDm8NcLUBeNQwoUA1gFcA3AB0y75arUAHeFx8EKw13NTV7eAA3CDIkDTUKUziAJgBOAz8mAjjiAHIwROMIeFyAXQMmbQoCBjjc7XgwLkjGkoNRULUqnAp4WDjNRPg4gGYUDPgsnNycWAgmDgZcg1zbJzLzd2E3DzIvdT5VFGCdPQAKPwCEAyhu9UsAPhCyMNuKHCY6COiyOiHgkZoHavO5fKIxOiZAiQxw1M65SoQAAexVyAEpgWooH1JmY3h8wT86JVqgwdsIMe5PDxvIcmMlgkZTBd-IF4AZgJ1vjEBp0wkNRlg+WoAPQitSwsw4Rx7JgQHi+CgLBjwAhqJhcCU+KBKswUXy6PzaJgATzUACNqvAoGoFfM1T4GtEuLC1JEKLBHPBhVC4hcnWirE9iHRQ46oitESiSuVhWK1ARJgkDQF4MazRq1AADGXYvBka1Z9WahpNFpqeZaXRgdUq23mqTwDhMYUkmpxXPwfPWzrCLaU3bxgsAd3rjebFbVHAauqg1JUXAQdFgXGM8JqLtgNvNUo9iaQy18rKCllP6tVTBQGNF4p6sET84Ii-gy9X64Ym+3u-vw0PlzZVhnnSyTXvGd4PoO4pcNoEBFJQsBjk26ilhQMRqjKYCOEws6Ps+r5rrkG6OFuFpmGkB4TFcL7cr8QygeKaS4UuK4EURJE7moxCuK4+SFMU3FlBRR5UYSEJQvRnG8cYRQxlSZDxjKiwUGQpg2g0OBpvwHCqgkDRqK4IA1BQDRziATEvix76fqR6raF6Qn-ku3S9Ahp7WHSKB0M5fQSZUXrmfhVnEV+tn2X+x4vt5rlAReyRee8Lm+XZ3qQWoSkqdaiHNmqABkulVCaarDvgCENBwjjaAQEAtLAZocRwK4FnOew0nhlmER+wU2eBv6UWyokvG555HANgZgXuKVeG1b4ddZHE9Q5EUDYB7mxaNN5aBNclTcxM1sSFgJCR5A1-KYFRrTRp3wBJgIBe1+02VxPEFNJ-E8QYAlRm9gmHsdl1Qudqhxf9kwEBJeQvTJh4IjB0ZlHJ8YRIVCadexZils0mWOqm2i1Xde2oyFfltGoMOkrkFYvI51HgmQA47RZBNzd+ibQ22SyU8Nl6jTsDOBbNXXzRNbNVDUFMxFzwO0xi7CGTizbyioggACwjEgysAOwiGIICUNQgh0BwBCyCAygKEwggiOUIBzGQ9hEEgpC6xIgi2A4jiyxVbC0MwTA+NkYoyj49jGIbegim7TgAAJoHQnkoCKUAQKoEd2E4dCQL8Miy6afiCAQ04QD4FvYD4SqLKqJDEMQWAgEmFvlMQAC04wgJYwCmEwZzslwaLAAg6hkJYACE4zaJY8DEFwpTOA0TAVS82ggI3reYFwmBDwAgtoBV0Mn28FZg4-wI8iCN7XOU5QA8uay+YKrmAjCMmAoBrz+vyMjc19gXC5-AV84DOHfZurcl4r2wGfTA38QBojcjfRsd9X4vw1pgZIKAAAcqCMFf1rn-YBLdsCX27lPUo7dQxeVEEPYeaA0SYAPhQE0e8CD0JNGcbQaIiGT2npYEMoZtDlCoTQjeAB+EcagAAKugkSsK4eUJgaIkDaGENsYBq8cAT0eMACAgDh7d0sGQbuaJhG8LoPAUoijDHCOAOQ+AwgkA0LREwBguhRwAFEd7QTOAZAAmi6NKylbRkFqmlAIZouANiQmqaC+UGHQgMhiOeC81C2MwBAdunckDd0wEwTAOBUmYA4LAh4w94FIUYNUK+w4DHsnkQAH1qdUjhOUDIIBUk4gybkmDCIAEpdgQM2Ogncsk5JwAorg5SCBnDSZPJgpQjHjKGRABRZwzgcH0VMtERiZmkJMRAcxqzLDaA2U04hsyyGhggBSApwjHCnLmUgJZ2xpSykVhKLJdNgCJO0C8JglgmD1OIOULglguD1LEQAdXgA4AAshQHwG8QWDMmIYsF8BRySK4NIrJSy14TJRbUz4PhYQMEMZfcZiYu7sjphvYQwDa4vh0HfVIWARjoOSKgh+yRVY4OwNU7AjcCEgC4Ko3ldLsB9wHmofBrch7WNDLY2ekwklcDOGIjFWKyDZM2RvEVIBtCpMsIA66zgcCeIMbcpZCS-mQgCGcDEaJxnYgHvANhCSlXfIrKIF8TIT7PIVgqF1OTyG92AL8wB8iTWeMlS8LgOBbRolNUcyVmoJYfMleosgJC3C4EUnKHgHS-kmkuHGnAwimAkMNWcct08FFHNGZfI51a5llorYGkhuSFGRC4NANQaA3KlqdbidUJCkBNsNcIL5PyxUiApGiO+ABWLAXKABsmBl0jHnWujdpRraJn6XmpWtA0BIHQWyq2wggA)

## Usage

Given an object:
```js
const people = {
  kevin: { age: 29, pets: ['maggie'], trash: 'removeme', },
  rafael: { age: 31, pets: ['flitch', 'haku'] }
};
```

We can use `from` or `merge` to produce a new object whilst leaving the original object intact. Both examples below are practically equivalent.

```js
import { from } from 'haaku';

const updated = from(people, draft => {
  draft.kevin.age = 30;
  draft.kevin.pets.push('trixie');
  delete draft.kevin.trash;
});
```

or

```js
import { merge } from 'haaku';

const updated = merge(people, {
  kevin: {
    age: 30,
    // use function patches to update a property based on its previous value
    pets: prev => [...prev, 'trixie'],
    // set a property to `undefined` to remove it from the object
    trash: undefined
  }
});
```

Both examples above will produce the given object:

```js
// new object is created
console.log(people === updated); // false

// original object remains unmutated
console.log(people.kevin.age); // 29
console.log(people.kevin.pets); // ['maggie']
console.log('trash' in people.kevin); // true

// unchanged references are "shared"
console.log(people.rafael === updated.rafael); // true

// changed objects & arrays will recursively be cloned
console.log(people.kevin === updated.kevin) // false
console.log(updated.kevin.age); // 30
console.log(updated.kevin.pets); // ['maggie', 'trixie']
console.log('trash' in updated.kevin); // false
```

## API

### `from(obj: Object, (draft: Proxy) => undefined): Object`

`from` accepts two arguments:

1. An object that will be used as the base; this object will remain unmutated
2. A recipe function to produce a new object

### `merge(obj: Object, ...patches: Object[]): Object`

`merge` accepts two or more arguments:

1. An object that will be used as the base; this object will remain unmutated
2. Any number of object patches; each patch will recursively be merged with the base state

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

In cases where you'd like the benefits of mutable objects without mutating the base object, you can nest `from`:

```js
import { from, merge } from 'haaku';

const a = { nums: [1, 2, 3] };

const b = merge(a, {
  nums: prev => from(prev, draft => {
    draft.push(4);
  })
});

console.log(a); // { nums: [1, 2, 3] } The original object is not mutated :)
console.log(b); // { nums: [1, 2, 3, 4] }
```

## Credits

Thank you [pygy](https://github.com/pygy) for his wisdom in fixing a major bug. Inspired by [clean-set](https://github.com/fwilkerson/clean-set), [Immer](https://github.com/immerjs/immer), and [mergerino](https://github.com/fuzetsu/mergerino).
