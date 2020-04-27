/* eslint-disable import/no-extraneous-dependencies */
import { RollupOptions, Plugin, WatcherOptions } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import cleanup from 'rollup-plugin-cleanup';

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
];
const watch: WatcherOptions = {
  include: ['src/**'],
};

const buildEsOptions = (name: string): RollupOptions => ({
  input: `src/${name}/index.ts`,
  output: {
    file: `dist/${name}.es.js`,
    format: 'es',
  },
  plugins,
  watch,
});

const options = entryNames.map(buildEsOptions);

export default options;
