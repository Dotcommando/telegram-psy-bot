import dotenv from 'dotenv';
import commonJs from '@rollup/plugin-commonjs';
import typeScript from 'rollup-plugin-typescript2';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

dotenv.config({ path: './.env.production' });
console.log('process.env', process.env);

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        injectProcessEnv({
            NODE_ENV: 'production',
            BOT_TOKEN: process.env.BOT_TOKEN,
            BOT_NAME: process.env.BOT_NAME
        }),
        typeScript({ tsconfig: './tsconfig.json' }),
        commonJs({ extensions: ['.js', '.ts'] })
    ],
};
