export default {
	input: './index.js',
	output: [{
		file: './_expected.cjs.js',
		format: 'cjs',
	}, {
		file: './_expected.umd.js',
    format: 'umd',
    name: 'test'
	}]
}
