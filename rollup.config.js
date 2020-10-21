import dotenv from 'dotenv';
import commonJs from '@rollup/plugin-commonjs';
import typeScript from 'rollup-plugin-typescript2';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

dotenv.config({ path: `./.env.${process.env.NODE_ENV}` });

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        injectProcessEnv({
            NODE_ENV: process.env.NODE_ENV,
            BOT_TOKEN: process.env.BOT_TOKEN,
            BOT_NAME: process.env.BOT_NAME
        }),
        typeScript({ tsconfig: './tsconfig.json' }),
        commonJs({ extensions: ['.js', '.ts'] })
    ],
};
