type IsObject<T> = T extends object ? (T extends Function ? false : true) : false;

type Transformer<T> = (prev: T) => T;

type PatchValue<T> = T | Transformer<T> | undefined;

type DeepPatch<T> = {
  [K in keyof T]?: T[K] extends object
    ? IsObject<T[K]> extends true
      ? PatchValue<T[K]> | DeepPatch<T[K]>
      : PatchValue<T[K]>
    : PatchValue<T[K]>;
};

// allow additional properties in patches (for adding new keys)
type Patch<T> = DeepPatch<T> & {
  [key: string]: any;
};

type Draft<T> = {
  -readonly [K in keyof T]: T[K] extends object
    ? IsObject<T[K]> extends true
      ? Draft<T[K]>
      : T[K] extends any[]
        ? Draft<T[K]>
        : T[K]
    : T[K];
};

export function produce<T extends object>(
  obj: T,
  fn: (draft: Draft<T>) => void
): T;

export function merge<T extends object>(
  obj: T, 
  ...patches: Patch<T>[]
): T;
