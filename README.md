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

We can use `from` or `merge` to produce a new object whilst leaving the original object intact. Both examples below are functionally equivalent.

### `from`

```js
import { from } from 'haaku';

const updated = from(people, draft => {
  draft.kevin.age = 30;
  draft.kevin.pets.push('trixie');
  delete draft.kevin.trash;
});
```

### `merge`

Note: Array properties are not deep merged.

```js
import { merge } from 'haaku';

const updated = merge(people, {
  kevin: {
    age: 30,
    // use function patches to update a property based on its previous value
    pets: (prev) => [...prev, 'trixie'],
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

## Credits

Thank you [pygy](https://github.com/pygy) for his wisdom in fixing a major bug. Inspired by [clean-set](https://github.com/fwilkerson/clean-set), [Immer](https://github.com/immerjs/immer), and [mergerino](https://github.com/fuzetsu/mergerino).
