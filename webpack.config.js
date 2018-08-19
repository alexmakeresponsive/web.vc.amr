var NODE_ENV = process.env.NODE_ENV;





var path              = require("path");
var webpack           = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractThemeCSS  = new ExtractTextPlugin('design/theme/styles.theme.min.css');
const extractVendorCSS = new ExtractTextPlugin('design/vendor/styles.vendor.min.css');







var plugins = [
    // new ExtractTextPlugin({
    //     filename: 'design/theme/styles.theme.min.css',
    //     disable: false,
    //     allChunks: true
    // }),
    new webpack.ProvidePlugin({
        $: "jquery",
        // jquery: "jquery",
        // jQuery: "jquery",
        // "window.jQuery": "jquery",
        Popper: "popper"
    }),
    new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    extractThemeCSS,
    extractVendorCSS
];

var entryPoints = {
    './templates/home.templates.min':        ["./entry/home.js"],
    './templates/about.templates.min':       ["./entry/about.js"],
    './templates/blog.templates.min':       ["./entry/blog.js"],
    './templates/default.templates.min':     ["./entry/single/post/category/default.js"],
    './templates/works/codeigniter.templates.min':     ["./entry/single/work/category/codeigniter.js"],

    './design/vendor/scripts.vendor.min': './design/vendor/hubScripts.js',
    './design/theme/scripts.theme.min': './design/theme/hubScripts.js',

    'stylesVendor.min': './design/vendor/hubStyles.js',
    'stylesTheme.min':  './design/theme/hubStyles.js',
};


if (NODE_ENV === 'development') {
    console.log('Looks like we are in development mode!');

    var liveReloadString = 'webpack-dev-server/client?http://localhost:9000';

    for (var prop in entryPoints) {
        typeof entryPoints[prop] ===  "object" ? entryPoints[prop].unshift(liveReloadString) : true;
    }
}

if (NODE_ENV === 'production') {
    console.log('Looks like we are in production mode!');

    var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

    plugins.push(
        new UglifyJsPlugin({
            sourceMap: true
        })
    );
}


// console.log(entryPoints);





module.exports = {
    context: __dirname + '/src',
    entry: entryPoints,
    output: {
        path: __dirname + "/build",
        publicPath: '/',
        filename: "[name].js",
        library: 'vendorScripts'
    },
    // node: {
    //     fs: 'empty'
    // },
    module: {
        //loaders: [        // or rules???
        // noParse: /.\/src\/design\/vendor\/bootstrap-4\/js\/bootstrap.js/,

        rules: [
            // {
            //     test: require.resolve( "./src/design/theme/scripts/scripts.js" ),
            //     use: "imports-loader?$=jquery,define=>false"
            // },

            {
                test: /\.handlebars$/,
                loader: 'handlebars-loader',
                query: {
                    partialDirs: [
                        path.join(__dirname + '/src', 'templates')
                    ]
                }
            },
            {
                test: /\.js/,
                exclude: /.\/src\/design\/vendor\//,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: extractVendorCSS.extract(
                    // [ 'css-loader']
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    // If you are having trouble with urls not resolving add this setting.
                                    // See https://github.com/webpack-contrib/css-loader#url
                                    url: false,
                                    minimize: true,
                                    sourceMap: true
                                }
                            }
                        ],
                    }
                )
            },
            {
                test: /\.scss/,
                use: extractThemeCSS.extract(
                    // [ 'style-loader']
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    // If you are having trouble with urls not resolving add this setting.
                                    // See https://github.com/webpack-contrib/css-loader#url
                                    url: false,
                                    minimize: true,
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }

                        ],
                    }
                )
            },

        ]

    },
    resolve: {
        alias: {
            jquery: path.resolve(__dirname, 'src/design/vendor/jquery/jquery.slim.js'),
            popper: path.resolve(__dirname, 'src/design/vendor/popper/popper.min.js'),
            Theme:  path.resolve(__dirname, 'src/design/theme'),
            Vendor: path.resolve(__dirname, 'src/design/vendor'),
        }
    },
    plugins: plugins,
    devServer: {
        host: 'localhost',
        port: 9000,
        contentBase: __dirname + '/build/',
        publicPath: '/',
        watchContentBase: true,
    }
};



