/* eslint-disable import/no-extraneous-dependencies */
import { promises } from 'fs';
import { RollupOptions, Plugin, WatcherOptions } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import cleanup from 'rollup-plugin-cleanup';
import filesize from 'rollup-plugin-filesize';
import del from 'rollup-plugin-delete';
import pkg from '../package.json';

const inputFilename = (entryName: string) => `src/${entryName}/index.ts`;
const outputDir = (entryName: string) => `${entryName}/`;
const outputFilename = (entryName: string) => `${entryName}.mjs`;
const entryNames = [
  'common',
  'dom',
  'function',
  'list',
  'math',
  'object',
  'promise',
  'string',
];
const tsconfig = './tsconfig.json';
const plugins: Plugin[] = [
  del({
    targets: entryNames.flatMap(entryName => [
      outputDir(entryName),
      outputFilename(entryName),
    ]),
  }),
  typescript({ tsconfig, clean: true }),
  cleanup({ comments: 'none' }),
  filesize(),
];
const watch: WatcherOptions = {
  include: ['src/**'],
};

const esOptions: RollupOptions = {
  input: Object.fromEntries(
    entryNames.map(entryName => [entryName, inputFilename(entryName)]),
  ),
  output: {
    dir: '.',
    entryFileNames: '[name].mjs',
    format: 'es',
  },
  plugins,
  watch,
};

const options = async (): Promise<RollupOptions[]> => {
  const files = entryNames.flatMap(entryName => [
    outputDir(entryName),
    outputFilename(entryName),
  ]);
  const ignores = ['node_modules', ...files];
  pkg.files = files;
  await Promise.all([
    promises.writeFile('package.json', JSON.stringify(pkg, null, 2)),
    promises.writeFile('.gitignore', `${ignores.join('\n')}\n`),
  ]);
  return [esOptions];
};

export default options;
