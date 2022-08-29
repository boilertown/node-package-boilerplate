import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{
			format: 'cjs',
			file: pkg.main,
		},
		{
			format: 'esm',
			file: pkg.module,
		},
	],
	external: [
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
		'./src',
	],
	plugins: [
		typescript({
			clean: true,
			useTsconfigDeclarationDir: true,
			tsconfigOverride: {
				exclude: ['src/**/__tests__/**'],
			},
		}),
		commonjs(),
		nodeResolve(),
		babel({
			babelHelpers: 'runtime',
			exclude: 'node_modules/**',
			extensions: ['.ts'],
		}),
		terser(),
		del({ targets: 'dist/*' }),
	],
};
