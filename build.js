import { build } from 'esbuild';
import { copyFile, mkdir } from 'node:fs/promises';

await mkdir('./dist', { recursive: true });

const exports = {
  './src/index.js': {
    cjs: {
      bundle: true,
      external: ['klona'],
      outfile: './dist/haaku.cjs',
      platform: 'node',
    },
    iife: {
      bundle: true,
      minify: true,
      outfile: './dist/haaku.min.js',
      platform: 'browser',
      globalName: 'haaku'
    }
  }
};

const jobs = [
  copyFile('./src/index.js', './dist/index.js'),
  copyFile('./src/merge.js', './dist/merge.js'),
  copyFile('./src/produce.js', './dist/produce.js'),
  copyFile('./src/index.d.ts', './dist/index.d.ts')
];

for (const file in exports) {
  const entryPoints = [file];

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
