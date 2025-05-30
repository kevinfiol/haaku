import test from 'node:test';
import { strict as assert } from 'node:assert';
import { produce, merge } from './src/index.js';

test('produce: object equality', () => {
  const people = {
    kevin: { age: 29, pets: ['maggie'] },
    rafael: { age: 31, pets: ['flitch', 'haku'], trash: 'removeme' },
    steven: { age: 31 }
  };

  const updated = produce(people, draft => {
    draft.kevin.age = 30;
    draft.kevin.pets.push('trixie');
    delete draft.rafael.trash;
  });

  assert.notDeepEqual(people, updated, 'root objects should not be deeply equal');
  assert.notDeepEqual(people.kevin, updated.kevin, 'changed objects should not be equal')
  assert.deepEqual(people.steven, updated.steven, 'unchanged objects should be equal');
  assert.equal(updated.kevin.age, 30);
  assert.deepEqual(updated.kevin.pets, ['maggie', 'trixie']);
  assert.equal(people.rafael.trash, 'removeme', 'property should still exist');
  assert.equal('trash' in updated.rafael, false, 'property should not exist in updated object')
});

test('produce: spread operators', () => {
  const foo = {
    obj: { a: 1, b: 2 },
    arr: [1, 2]
  };

  const bar = produce(foo, draft => {
    draft.obj = {...draft.obj, c: 3};
    draft.arr = [...draft.arr, 3];
  });

  assert.deepEqual(foo.obj, { a: 1, b: 2 });
  assert.deepEqual(foo.arr, [1,2]);
  assert.deepEqual(bar.obj, { a: 1, b: 2, c: 3});
  assert.deepEqual(bar.arr, [1,2,3]);
});


test('merge: object equality', () => {
  const people = {
    kevin: { age: 29, pets: ['maggie'] },
    rafael: { age: 31, pets: ['flitch', 'haku'], trash: 'removeme' },
    steven: { age: 31 }
  };

  const updated = merge(people, {
    kevin: { age: 30, pets: prev => [...prev, 'trixie'] },
    rafael: { trash: undefined }
  });

  assert.notDeepEqual(people, updated, 'root objects should not be deeply equal');
  assert.notDeepEqual(people.kevin, updated.kevin, 'changed objects should not be equal')
  assert.deepEqual(people.steven, updated.steven, 'unchanged objects should be equal');
  assert.equal(updated.kevin.age, 30);
  assert.deepEqual(updated.kevin.pets, ['maggie', 'trixie']);
  assert.equal(people.rafael.trash, 'removeme', 'property should still exist');
  assert.equal('trash' in updated.rafael, false, 'property should not exist in updated object')
});

test('merge: should be able to overwite non objects with objects', () => {
  const people = {
    kevin: { foo: 'bar' }
  };

  const updated = merge(people, { kevin: 2 });

  assert.deepEqual(people, { kevin: { foo: 'bar' } });
  assert.deepEqual(updated, { kevin: 2 });
  assert.notEqual(people, updated);
});

test('produce + merge: arrays', () => {
  const a = { nums: [1, 2, 3] };

  const b = merge(a, {
    nums: prev => produce(prev, draft => {
      draft.push(4);
    })
  });

  assert.deepEqual(a, { nums: [1, 2, 3] });
  assert.deepEqual(b, { nums: [1, 2, 3, 4] });
  assert.notEqual(a, b);
  assert.notEqual(a.nums, b.nums);
});

test('merge: does not merge arrays', () => {
  const a = { nums: [1, 2, 3] };
  const b = merge(a, { nums: [1, 2] });

  assert.deepEqual(a, { nums: [1, 2, 3] });
  assert.deepEqual(b, { nums: [1, 2] });
});

test('produce: arrays', () => {
  const a = [1, 2, 3];
  const b = produce(a, draft => {
    draft.push(4);
    draft[0] = 100;
  });

  assert.deepEqual(a, [1, 2, 3]);
  assert.deepEqual(b, [100, 2, 3, 4]);
});

test('produce: no structural sharing', () => {
  const a = { foo: [1], bar: { baz: 10 } };
  const b = produce(a, draft => {
    draft.foo = [1, 2, 3];
  });

  assert.notEqual(a.foo, b.foo);
  assert.notEqual(a.bar, b.bar);
  assert.deepEqual(a, { foo: [1], bar: { baz: 10 } });
  assert.deepEqual(b, { foo: [1, 2, 3], bar: { baz: 10 } });
});