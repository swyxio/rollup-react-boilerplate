// @flow
import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import nodeResolve from 'rollup-plugin-node-resolve';
import progress from 'rollup-plugin-progress';
import visualizer from 'rollup-plugin-visualizer';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'
import livereload from 'rollup-plugin-livereload'
import reactSvg from 'rollup-plugin-react-svg'
import SFC from 'rollup-plugin-react-sfc'

const production = !process.env.ROLLUP_WATCH
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'public/dist/module/index.js',
      format: 'umd',
      sourcemap: !production,
    },
  ],
  acornInjectPlugins: [
    require('acorn-jsx')()
  ],
  globals: {
      react: "React"
  },
  plugins: [
    SFC(),
    progress(),
    nodeResolve({
      browser: true,
    }),
    json(),
    reactSvg(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      include: [
        'node_modules/**',
      ],
      exclude: [
        'node_modules/process-es6/**',
        'src/**'
      ],
      namedExports: {
        'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
    postcss({
      plugins: [
        require('postcss-nested')
      ]
    }),
    filesize(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    !production && visualizer(),
    !production && livereload(),
    production && uglify(),
  ],
};
