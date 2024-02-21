import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import serve from 'rollup-plugin-serve'
import { nodeResolve } from '@rollup/plugin-node-resolve';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
	external: ['jquery'],
	input: 'src/index.js',
	output: {
		file: 'dist/index.js',
		format: 'iife',
		globals: {
      jquery: '$'
    },
		name: 'demo'
	},
	plugins: [
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
