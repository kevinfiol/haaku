# haaku

Kinda like a minimal Immer.

```shell
npm install haaku
```

[Try on Flems.io](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4hcYgAJgksACdaWSa0kBeSYQwYA1gFcA3AB00x8VIAOMWudhrpxyZO0wAbhDSJpkjAHMYngCYATgpJS2I4T2QAcixfHwgYaIBdZQoHSTkMMAwYKE8ZX39JAGYARlDwyMkYsCgIYmpCaNDozT0U5WNWIxM0M0ldcwATDEZhu3lFAApLa1hQ4aywKVUAPns0RyXs4nxnNzR8IrsSgAZe7eW9g-d8KvvdOEJp6OI5CAAPROiASl7WP9jMYAPQgyRoGAAd0ktAARrwYNQpBA4JJqHIYGMYMNTPQ4LRYPgoLQfLMrDYYGpVOohqNxv9JGDZBgoHAYMC0MzaB8EpgoLCEUipJi4u40bo0FhdMRsbj+vjCTBiaTyfNlbcjkVGczgni0ASiSSyXNKftXHcqjrwTE4j4EklkpzmZKmhg0H4JpiwDBMf14N5MZJDCBnhhMbiQPrDcrjWqzctcgKabSRnL8Im8tbJO9dBy+sy3R6cYLEci0QAyQNZACeaKh0AFmOoujkcAgLjyNckcKp1BJkPl4iVKpNFKJmupqfpOPNh1+TPBOTZ+eHRtVdPTmuOfmz52jI7jm-Gc8tMAi2dt8R+rXeXx+yUoobywog+LwZ0QARKbA4IEwOB4Pg1BwAIND0IwzA8GwyRUPUaDaAgKCcIBPCaDouhPq25BocQxDmJEYKSuY2g+MBigguhegAAJnPgZT0SCwyosQlFaHo+BYHc-BPsQNaWHgcAYhA5iiFQ5hjE08BIMgslnFQUhoKoICwcgAC0FQgAAhBUciqDAyC0Mk+iYsQrZbHIKkUMgmkGUZFB6QAgnItb4Kizm1tMaC-BQYCqGgVnIPJIAVhWADycJWQEABsFAlAArBQZRBPJyVnKpQVULQfGWGFYDTIFGlUJZqmaQFqnBb8KYRYiVllAA7EljXfs1JT1RlwU5bgqlFSFFYFaVVAAD5DXIJnnuZmQAPyBcFdnJMpPWacA+CrXI7BKVpZw+R5GA1m5cC7TW0xyL8gWacgq34GgySIGAs1UKF0zzYt1m9Zda2wZt20UOV1nLVdaCAr5D0gFNkJQlZ0WNfFFQxQEFDwx1VDzRQxC-DwS3FedVB-ZlbA9MqUx1Y1DVxQE8klBTySwc+sDIm+BofogJRBPVMGsEAA)

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

## Credits

See [clean-set](https://github.com/fwilkerson/clean-set) and (obviously) [Immer](https://github.com/immerjs/immer).