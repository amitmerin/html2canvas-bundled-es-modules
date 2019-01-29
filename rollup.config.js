import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/html2canvas/dist/html2canvas.js',
    output: {
      file: './html2canvas.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
    ],
  },
];