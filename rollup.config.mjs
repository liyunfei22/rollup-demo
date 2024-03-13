import build from './rollup-plugin-build.js';
import build2 from './rollup-plugin-build2.js';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
	input: 'src/index.js',
	output: {
		dir: 'dist',
		format: 'amd',
		name: 'demo'
	},
	plugins: [
		build(),
		build2()
	]
};
