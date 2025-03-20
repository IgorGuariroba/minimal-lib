import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            exports: 'named',
            sourcemap: true
        },
        {
            file: 'dist/index.esm.js',
            format: 'es',
            exports: 'named',
            sourcemap: true
        }
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            useTsconfigDeclarationDir: true
        }),
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        }),
        terser()
    ]
};