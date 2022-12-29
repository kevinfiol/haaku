import { run, suite } from 'flitch';
import { from, merge } from './index.js';
import { strict as assert } from 'assert';

const test = suite('haaku tests');

test('from: object equality', () => {
  const people = {
    kevin: { age: 29, pets: ['maggie'] },
    rafael: { age: 31, pets: ['flitch', 'haku'], trash: 'removeme' },
    steven: { age: 31 }
  };

  const updated = from(people, draft => {
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

test('from: spread operators', () => {
  const foo = {
    obj: { a: 1, b: 2 },
    arr: [1, 2]
  };

  const bar = from(foo, draft => {
    draft.obj = {...draft.obj, c: 3};
    draft.arr = [...draft.arr, 3];
  });

  assert.deepEqual(foo.obj, { a: 1, b: 2 });
  assert.deepEqual(foo.arr, [1,2]);
  assert.deepEqual(bar.obj, { a: 1, b: 2, c: 3});
  assert.deepEqual(bar.arr, [1,2,3]);
});

test('from: non objects/array should throw', () => {
  let thrown = false;

  try {
    const foo = from('not an obj or arr', draft => {});
  } catch (_e) {
    thrown = true;
  }

  assert.ok(thrown);
});

run();