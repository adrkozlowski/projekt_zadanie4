let mix = require('laravel-mix');

mix.js('src/js/index.js', 'public/js/site.js');
mix.sass('src/sass/styles.scss', 'public/css/styles.css');
