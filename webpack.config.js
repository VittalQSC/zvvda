module.exports = {
    entry: ["./app/index.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'stage-3']
                }
            }, 
            {
                test: /\.html$/, // Only .html files
                loader: 'html-loader' // Run html loader
            },
            { test: /\.png$/, loader: "url-loader?mimetype=image/png" },            
                                    
        ]
    },
    devtool: "#inline-source-map"
    
};