/* eslint-disable import/no-extraneous-dependencies */
import { writeFile } from 'fs';
import { RollupOptions, Plugin, WatcherOptions } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import cleanup from 'rollup-plugin-cleanup';
import filesize from 'rollup-plugin-filesize';
import del from 'rollup-plugin-delete';
import pkg from './package.json';

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
  typescript({ tsconfig, clean: true }),
  cleanup({ comments: 'none' }),
  filesize(),
];
const watch: WatcherOptions = {
  include: ['src/**'],
};
const inputFilename = (entryName: string) => `src/${entryName}/index.ts`;
const outputDir = (entryName: string) => `${entryName}/`;
const outputFilename = (entryName: string) => `${entryName}.mjs`;

const buildEsOptions = (entryName: string): RollupOptions => ({
  input: inputFilename(entryName),
  output: {
    file: outputFilename(entryName),
    format: 'es',
  },
  plugins: [
    del({ targets: [outputDir(entryName), outputFilename(entryName)] }),
    ...plugins,
  ],
  watch,
});

pkg.files = [].concat(
  ...entryNames.map(entryName => [
    outputDir(entryName),
    outputFilename(entryName),
  ]),
);
writeFile('./package.json', JSON.stringify(pkg, null, 2), () => undefined);

const options = entryNames.map(buildEsOptions);

export default options;
