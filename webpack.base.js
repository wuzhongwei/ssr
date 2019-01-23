module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: ["@babel/react","@babel/env"],
                plugins: ["@babel/plugin-transform-runtime"]
            },
        }]
    },
    mode: 'production',
}