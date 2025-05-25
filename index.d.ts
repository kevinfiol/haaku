type IsPlainObject<T> = T extends any[] 
  ? false 
  : T extends Function 
  ? false 
  : T extends object 
  ? true 
  : false;

type Transformer<T> = (prev: T) => T;

type PatchValue<T> = T | Transformer<T> | undefined;

type DeepPatch<T> = {
  [K in keyof T]?: T[K] extends object
    ? IsPlainObject<T[K]> extends true
      ? PatchValue<T[K]> | DeepPatch<T[K]>
      : PatchValue<T[K]>
    : PatchValue<T[K]>;
};

// allow additional properties in patches (for adding new keys)
type FlexiblePatch<T> = DeepPatch<T> & {
  [key: string]: any;
};

type Draft<T> = {
  -readonly [K in keyof T]-?: T[K] extends object
    ? IsPlainObject<T[K]> extends true
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
  ...patches: FlexiblePatch<T>[]
): T;
