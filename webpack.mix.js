const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

var site_path = 'resources/views/site/';
var painel_path = 'resources/views/painel/';

var assets = 'public/assets/';
var site_assets = assets + 'site/';
var painel_assets = assets + 'painel/';

mix.setPublicPath('public/')

    // Site assets
    .styles([
        site_path + 'css/style.css'
    ], site_assets + 'css/style.css')
    .scripts([
        site_path + 'js/script.js'
    ], site_assets + 'js/script.js')

    // Painel assets
    .styles([
        painel_path + 'css/style.css'
    ], painel_assets + 'css/style.css')
    .scripts([
        painel_path + 'js/script.js'
    ], painel_assets + 'js/script.js')

    .version();
