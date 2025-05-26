import { build } from 'esbuild';
import { resolve } from 'node:path';

const exports = {
  './src/index.js': {
    cjs: {
      bundle: true,
      external: ['klona'],
      outfile: resolve('./dist/haaku.cjs'),
      platform: 'node',
    },
    iife: {
      bundle: true,
      minify: true,
      outfile: resolve('./dist/haaku.min.js'),
      platform: 'browser',
      globalName: 'haaku'
    }
  }
};

const jobs = [];

for (const file in exports) {
  const entryPoints = [resolve(file)];

  for (const format in exports[file]) {
    const {
      bundle,
      platform,
      minify,
      outfile,
      globalName,
      external
    } = exports[file][format];

    jobs.push(
      build({
        external,
        bundle,
        format,
        platform,
        minify,
        target: 'es2020',
        entryPoints,
        outfile,
        globalName
      })
      .then(() => console.log(`Bundled: ${outfile}`))
      .catch(console.error)
    );
  }
}

await Promise.all(jobs);
