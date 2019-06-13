import typescript from 'rollup-plugin-typescript2';
import { uglify } from 'rollup-plugin-uglify';


export default [
  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        abortOnError: false,
        useTsconfigDeclarationDir: true,
      }),
    ],
    output: {
      format: 'es',
      file: 'dist/skein.mjs',
      sourcemap: true,
      sourcemapFile: 'dist/skein.mjs.map'
    }
  },
  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        abortOnError: false,
        useTsconfigDeclarationDir: true,
      }),
    ],
    output: {
      format: 'cjs',
      file: 'dist/skein.umd.js',
      sourcemap: true,
      sourcemapFile: 'dist/skein.umd.js.map'
    }
  },
  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        abortOnError: false,
        useTsconfigDeclarationDir: true,
      }),
    ],
    output: {
      format: 'iife',
      name: 'cp',
      file: 'dist/skein.js',
      sourcemap: true,
      sourcemapFile: 'dist/skein.js.map',
    }
  },
  {
    input: 'src/index.ts',
    plugins: [
      typescript({
        abortOnError: false,
        useTsconfigDeclarationDir: true,
      }),
      uglify(),
    ],
    output: {
      format: 'iife',
      name: 'cp',
      file: 'dist/skein.min.js',
      sourcemap: true,
      sourcemapFile: 'dist/skein.min.js.map'
    }
  },
]


