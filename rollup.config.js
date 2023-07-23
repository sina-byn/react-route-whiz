const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');

module.exports = {
  input: 'index.ts',
  output: {
    file: './build/bundle.js',
    format: 'cjs',
  },
  plugins: [typescript(), terser()],
  external: ['react', 'react/jsx-runtime'],
};
