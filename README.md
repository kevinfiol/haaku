# haaku

Kinda like a minimal Immer. WIP.

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
```