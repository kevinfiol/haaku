# haaku

Kinda like a minimal Immer.

```js
import { from } from 'haaku';

const people = {
  kevin: { age: 29, pets: ['maggie'] },
  rafael: { age: 31, pets: ['flitch', 'haku'] }
};

const updated = from(people, draft => {
  draft.kevin.age = 30;
  draft.kevin.pets.push('trixie');
});

// new object is created
console.log(people === updated); // false

// original object remains unmutated
console.log(people.kevin.age); // 29
console.log(people.kevin.pets); // ['maggie']

// unchanged references are "shared"
console.log(people.rafael === updated.rafael); // true

// changed objects & arrays will recursively be cloned
console.log(people.kevin === updated.kevin) // false
console.log(updated.kevin.age); // 30
console.log(updated.kevin.pets); // ['maggie', 'trixie']
```