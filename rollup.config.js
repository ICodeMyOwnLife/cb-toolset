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
const plugins = [
  typescript({ tsconfig, clean: true }),
  cleanup({ comments: 'none' }),
];
const watch = {
  include: ['src/**'],
};
const buildEsOptions = name => ({
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
