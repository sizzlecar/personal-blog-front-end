module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                loader: 'less-loader', // compiles Less to CSS
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: 'url-loader',
            }
        ],
    },
};
