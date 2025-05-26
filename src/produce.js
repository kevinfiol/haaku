import { klona } from 'klona';

export function produce(obj, fn) {
  fn(obj = klona(obj));
  return obj;
}