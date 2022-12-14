import { run, suite } from 'flitch';
import { from } from './index.js';
import { strict as assert } from 'assert';

const test = suite('haaku tests');

test('test object equality', () => {
  const people = {
    kevin: { age: 29, pets: ['maggie'] },
    rafael: { age: 31, pets: ['flitch', 'haku'] }
  };

  const updated = from(people, draft => {
    draft.kevin.age = 30;
    draft.kevin.pets.push('trixie');
  });

  assert.notDeepEqual(people, updated, 'root objects should not be deeply equal');
  assert.notDeepEqual(people.kevin, updated.kevin, 'changed objects should not be equal')
  assert.deepEqual(people.rafael, updated.rafael, 'unchanged objects should be equal');
  assert.equal(updated.kevin.age, 30);
  assert.deepEqual(updated.kevin.pets, ['maggie', 'trixie']);
});

run();