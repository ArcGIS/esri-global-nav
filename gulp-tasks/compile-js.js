const gulp = require('gulp');
const logger = require('gulp-logger');
const watch = require('gulp-watch');
const rollup_stream = require('rollup-stream');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');
const rollup_plugin_babel = require('rollup-plugin-babel');
const babel_plugin_external_helpers = require('babel-plugin-external-helpers');
const rollup_plugin_json = require('rollup-plugin-json');
const rollup_plugin_node_resolve = require('rollup-plugin-node-resolve');
const rollup_plugin_commonjs = require('rollup-plugin-commonjs');
const rollup_plugin_uglify = require('rollup-plugin-uglify');
const babel_preset_env = require('babel-preset-env');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const size = require('gulp-size');
const add_banner = require('gulp-banner');
const banner = require('./banner');
const pkg = require('../package.json');
const uglifyjs = require("uglify-js");
const fs = require('fs');

const files = [
	{rootJs: `./${pkg.main}`, saveAs: `${pkg.gulp_config.build_name}.js`},
	{rootJs: `./${pkg.gulp_config.src_path}/demo.js`, saveAs: 'demo.js'},
	{rootJs: `./${pkg.gulp_config.src_path}/home.js`, saveAs: 'home.js'},
	{rootJs: `./${pkg.gulp_config.src_path}/app-mode-demo.js`, saveAs: 'app-mode-demo.js'}
]

function minifyJS(cb) {
	console.log('minifying js...');
	files.forEach(file => minifyJSFile(file));
	if (cb) {
		cb();
	}
}

function minifyJSFile(file) {
	fs.readFile(`./dist/${file.saveAs}`, 'utf8', function(err, contents) {
		const output = uglifyjs.minify(contents).code; 

		fs.writeFile("./dist/" + file.saveAs, output, function(err) {
			if(err) return console.log(err);
		});
	});

}

function compileJs(cb) {
	files.forEach(file => compileJsFile(file));
	if (cb) {
		cb();
	}
}

function compileJsFile({rootJs, saveAs}) {
	return rollup_stream({
		input: rootJs,
		format: `${pkg.gulp_config.js_module_format}`,
		name: 'esriGlobalNav',
		sourcemap: true,
		plugins: [
			rollup_plugin_json(),
			rollup_plugin_node_resolve(),
			rollup_plugin_commonjs({
				include: 'node_modules/**'
			}),
			rollup_plugin_babel({
				babelrc: false,
				plugins: [
					babel_plugin_external_helpers
				],
				presets: [
					[babel_preset_env, {
						modules: false,
						targets: {
							"browsers": ['last 2 versions', 'Safari >6', 'IE > 10']
						}
					}]]
			}),
			rollup_plugin_uglify.uglify(false)
		]
	})
		.pipe(
			source(`./${pkg.main}`)
		)
		.pipe(logger({
			before: 'Compiling JS',
			after: 'Compiling JS complete!',
			showChange: false
		}))
		.pipe(
			buffer()
		)
		.pipe(
			add_banner(banner)
		)
		.pipe(
			sourcemaps.init({
				loadMaps: true
			})
		)
		.pipe(
			rename(saveAs)
		)
		.pipe(
			size({
				gzip: true,
				showFiles: true,
				title: 'Size of:'
			})
		)
		.pipe(
			sourcemaps.write('.')
		)
		.pipe(
			gulp.dest(pkg.gulp_config.build_path)
		);
}

gulp.task('compile-js', compileJs);

gulp.task('minify-js', minifyJS);

gulp.task('watch-js', () => {
	console.log('watching js...');
	compileJs();
	const jsGlob = `${pkg.gulp_config.src_path}/**/*.js`;
	return watch(jsGlob, () => {
		compileJs();
	});
});
