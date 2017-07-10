    var path                       = require('path');
    var ExtractTextPlugin          = require('extract-text-webpack-plugin');
    var BrowserSyncPlugin          = require('browser-sync-webpack-plugin');  
    var WebpackBuildNotifierPlugin = require('webpack-build-notifier'); 

    module.exports = {
    devtool: 'source-map',
    entry: {
        style: './scss/style.scss'
    },
    output: {
        path: path.join(__dirname, './core'),
        filename: '[name].css'
    },
      module: {
        rules: [
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract(
              {
                fallback: "style-loader",
                use: ["css-loader", "sass-loader?outputStyle=expanded"]
              }
            )
          }
        ]
      },
    plugins: [
        new WebpackBuildNotifierPlugin(),
        new ExtractTextPlugin('[name].css'),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: [''] },
            files: [
                '*.css',
                '*.html'
            ]
        })
    ]
    };