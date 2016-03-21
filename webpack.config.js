import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import precss from 'precss';

let isProduction = process.env.NODE_ENV === 'production';
let isGit = process.env.TARGET === 'git';

let plugins = [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin(isGit ? 'style.min.css' : 'style.css', {
        allChunks: true
    })
];

if (isGit) {
    plugins.push(new webpack.optimize.UglifyJsPlugin()); }

export default {
    context: path.join(__dirname, 'src'),

    entry: './index.js',

    output: {
        path: path.join(__dirname, isGit ? 'temp' :
            (isProduction ? 'lib' : 'demo/lib')),
        filename: isGit ? 'extedit.min.js' : 'extedit.js'
    },

    plugins,

    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel!eslint',
            exclude: /node_modules/,
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(isGit ? 'css?minimize!postcss' :
                'css!postcss')
        }, {
            test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader : 'file?name=[name].[ext]'
        }]
    },

    devtool: isGit ? null : (isProduction ? 'source-map' : 'eval-source-map'),

    postcss: function() {
        return [autoprefixer, precss];
    },

    watchOptions: {
        aggregateTimeout: 100
    }
};
