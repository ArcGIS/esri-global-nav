const gulp = require('gulp');
const logger = require('gulp-logger');
const watch = require('gulp-watch');
const rollup = require('rollup');
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

const pkg = require('../package.json');

function compileJs() {
	rollup_stream({
		input: `./${pkg.main}`,
		format: 'iife',
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
			//rollup_plugin_uglify(false)
		]
	}).pipe(
		source(`./${pkg.main}`)
	).pipe(logger({
		before: 'Compiling JS',
		after: 'Compiling JS complete!',
		showChange: false
	})).pipe(
		buffer()
	).pipe(
		sourcemaps.init({
			loadMaps: true
		})
	).pipe(
		rename(`${pkg.gulp_config.build_name}.js`)
	).pipe(
		size({
			gzip: true,
			showFiles: true,
			title: 'Size of:'
		})
	).pipe(
		sourcemaps.write('.')
	).pipe(
		gulp.dest(pkg.gulp_config.build_path)
	)
}

gulp.task('compile-js', () => {
	compileJs();
});

gulp.task('watch-js', () => {
	console.log('watching js...');

	const jsGlob = `${pkg.gulp_config.src_path}/**/*.js`;
	watch(jsGlob, () => {
		compileJs();
	});
});
