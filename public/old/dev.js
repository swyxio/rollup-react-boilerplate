const rollup = require("rollup");
const babel = require("rollup-plugin-babel");
const filesize = require("rollup-plugin-filesize");
const nodeResolve = require("rollup-plugin-node-resolve");
const progress = require("rollup-plugin-progress");
const visualizer = require("rollup-plugin-visualizer");
const commonjs = require("rollup-plugin-commonjs");
const json = require("rollup-plugin-json");
const replace = require("rollup-plugin-replace");
const postcss = require("rollup-plugin-postcss");
const { uglify } = require("rollup-plugin-uglify");
const livereload = require("rollup-plugin-livereload");
const reactSvg = require("rollup-plugin-react-svg");
const SFC = require("rollup-plugin-react-sfc");

const production = !process.env.ROLLUP_WATCH;
(async function () {
  try {
    const bundle = await rollup.rollup({
      input: `src/index.js`,
      acornInjectPlugins: [require("acorn-jsx")()],
      plugins: [
        SFC(),
        // progress(),
        // nodeResolve({
        //   browser: true,
        // }),
        // json(),
        // reactSvg(),
        // babel({
        //   exclude: "node_modules/**",
        // }),
        // commonjs({
        //   include: ["node_modules/**"],
        //   exclude: ["node_modules/process-es6/**", "src/**"],
        //   namedExports: {
        //     "node_modules/react/index.js": [
        //       "Children",
        //       "Component",
        //       "PropTypes",
        //       "createElement",
        //     ],
        //     "node_modules/react-dom/index.js": ["render"],
        //   },
        // }),
        // postcss({
        //   plugins: [require("postcss-nested")],
        // }),
        // filesize(),
        // replace({
        //   "process.env.NODE_ENV": JSON.stringify("production"),
        // }),
        // !production && visualizer(),
        // !production && livereload(),
        // production && uglify(),
      ],
    });

    await bundle.write({
      format: "iife",
      file: `public/dist/module/index.js`,
      // sourcemap: !production,
      // globals: { 'svelte/internal': 'svelte' }
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
})();
