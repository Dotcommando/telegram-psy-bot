import nodeResolve from 'rollup-plugin-node-resolve';
import commonJs from 'rollup-plugin-commonjs';
import typeScript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        nodeResolve(),
        commonJs(),
        typeScript({ tsconfig: 'tsconfig.json' }),
    ],
};
