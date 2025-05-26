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

// Helper type to compute intersection of all patches
type MergePatches<Patches extends readonly any[]> = 
  Patches extends readonly [infer First, ...infer Rest]
    ? First & MergePatches<Rest>
    : {};

// Enhanced merge with inferred return type
export function merge<
  T extends object,
  P extends readonly any[]
>(
  obj: T, 
  ...patches: P
): T & MergePatches<P>;

// Enhanced produce with inferred return type
export function produce<T extends object>(
  obj: T,
  fn: (draft: Draft<T>) => void
): T;