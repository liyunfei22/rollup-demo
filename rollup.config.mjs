import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import serve from 'rollup-plugin-serve'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import myExample from './rollup-plugin-my-example.js';
import alias from './rollup-plugin-alias.js';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
	external: ['jquery'],
	input: 'src/index.js',
	output: {
		dir: 'dist',
		format: 'iife',
		globals: {
      jquery: '$'
    },
		name: 'demo'
	},
	plugins: [
		alias({
      entries: [
        // 将把 import xxx from 'module-a' 
        // 转换为 import xxx from './module-a'
        { find: 'module-a', replacement: './module-a.js' },
      ]
    }),
		myExample(),
		nodeResolve(),
		commonjs(),
		serve({
			open: true,
			host: 'localhost',
  		port: 3002,
			contentBase: ['dist', 'static'],
		}),
		json()
	]
};
