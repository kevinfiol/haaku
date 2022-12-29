# haaku

Kinda like a minimal Immer.

```shell
npm install haaku
```

[Try on Flems.io](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4hcYgAJgksACdaWSa0kBeSYQwYA1gFcA3AB00x8VIAOMWudhrpxyZO0wAbhDSJpkjAHMYngCYATgpJS2I4T2QAcixfHwgYaIBdZQoHSTkMMAwYKE8ZX39JAGYARlDwyMkYsCgIYmpCaNDozT0U5WNWIxM0M0ldcwATDEZhu3lFAApLa1hQ4aywKVUAPns0RyXs4nxnNzR8IrsSgAZe7eW9g-d8KvvdOEJp6OI5CAAPROiASl7WP9jMYAPQgyRoGAAd0ktAARrwYNQpBA4JJqHIYGMYMNTPQ4LRYPgoLQfLMrDYYGpVOohqNxv9JGDZBgoHAYMC0MzaB8EpgoLCEUipJi4u40bo0FhdMRsbj+vjCTBiaTyfNlbcjkVGczgni0ASiSSyXNKftXHcqjrwTE4j4EklkpzmZKmhg0H4JpiwDBMf14N5MZJDCBnhhMbiQPrDcrjWqzctcgKabSRnL8Im8tbJO9dBy+sy3R6cYLEci0QAyQNZACeaKh0AFmOoujkcAgLjyNckcKp1BJkPl4iVKpNFKJmupqfpOPNh1+TPBOTZ+eHRtVdPTmuOfmz52jI7jm-Gc8tMAi2dt8R+rXeXx+yUoobywog+LwZ0QARKbA4IEwOB4Pg1BwAIND0IwzA8GwyRUPUaDaAgKCcIBPCaDouhPq25BocQxDmJEYKSuY2g+MBigguhegAAJnPgZT0SCwyosQlFaHo+BYHc-BPsQNaWHgcAYhA5iiFQ5hjE08BIMgslnFQUjEKoICwcgAC0FQgMAfjENMMAULQvzALAUhoKoACEFRyKoMDILQyT6JixCtlscgqRQyCacgsHWZCMIAOpYtoACyGDmAZqgAIJyLW+CotFtYUGZMDrLgqnySAFYVgA8nC7kACwBBQ+UAOwUGUJX5eVlWqcgGW0HxljZWA0zuepmluapmlpR5GW-CmuWIu5FXVRQ34lGNJQlLVGWNT17VUFlel2ckqjAPgG1yOwZnmWcvwUAlGA1nFcCHTW0xyL8bWaRQYBrTpekUMQt0UBARkQC15mDcKRAYHA2VQmgj3EL8AA+oO0HpvxZSGsAesQhAhimINOS5kgAEowHUP0Pfpz1gP8H0Xb9cDTBANnIMQyS-L8qNyK5+APW9+gmWEqiQ29FAYKoQNveD5iOeeaPmAA-LZVOqMgG1xckiAYG1GVLbZbUaVQ9mS9LciwTte1JSLfmSAACgonznbZ9lPb8iBbT010Kat60bRAgJcyLujLVTVvOz0YCusQb5bO7+mGcAdNbLQqhyIz55Q+DBvG7QpuPQTFBR5opMwGDoN7OYTwvJnWVR+yunB-ttCsArVDKvI7lBPJAQABxVQEACsDdjW3M1UED+kq5ptB2+AlcgEZrN993a3SzAPRh7C0zxyb51oJb+1oIPEAUOY7NQyLUsbTAss978IuO-g0+IBcRPmeYvwIwoMIAKIxTy0whgAmrQujou6sJoFA3Z0HMN2eEZYIiwjkNWI6cB8Ahn+GAF+LV3Y30JqoHO1hpj-FpvgYYL5GBk3+LPcww9WCAiurBFu8kyj5QAGwUBbi3Iq9CAjJFgs+WAyIA5IRAJ+ahQQggwVYEAA)

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

## TODO
* Objects are shallow cloned on every "get"; for efficiency, this should only be done on "set"

## Credits

Thank you [pygy](https://github.com/pygy) for his wisdom in fixing a major bug. Inspired by [clean-set](https://github.com/fwilkerson/clean-set) and (obviously) [Immer](https://github.com/immerjs/immer).
