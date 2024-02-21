const { babel } = require('@rollup/plugin-babel');
const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const postcss = require('rollup-plugin-postcss');
const scss = require('rollup-plugin-scss');
/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'dada'
  }, 
  plugins: [
    scss({ fileName: 'bundle.css' }),
    postcss({
      extract: true,
      minimize: false,
    }),
    json(),
    nodeResolve(),
    commonjs(),
    babel({
      presets: ['@babel/preset-env']
    }),
  ],
}