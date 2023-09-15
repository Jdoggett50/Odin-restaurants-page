const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};