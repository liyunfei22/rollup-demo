import json from '@rollup/plugin-json'
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs'
  },
  plugins: [resolve({
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  }), 
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**' // 只编译我们的源代码
  }),
  json()],
  external: ['lodash']
}