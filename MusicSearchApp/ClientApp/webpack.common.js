const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DIST_DIR = path.join(__dirname, "dist");
const ASSET_PATH = "~/ClientApp/dist/";
const SRC_DIR = path.join(__dirname, "src");

const plugins = [
  new CleanWebpackPlugin({
    cleanOnceBeforeBuildPatterns: ['**/*', '!static-files/**'],
    //dry: true
  }),
  new HtmlWebpackPlugin({
    filename: '../../Views/Home/Index.cshtml',
    template: "./src/templates/Index_template.cshtml"
  })
];

const extensions = [".js", ".jsx", ".ts", ".tsx", ".scss", ".css"];
const exclude = [/node_modules/, path.join(__dirname, "src", "/**/*.test.ts")];

const rules = [
  {
    test: /\.(ts|js)x?$/,
    exclude: exclude,
    use: ["babel-loader"]
  },
  {
    test: /\.(js)x?$/,
    enforce: "pre",
    loader: "eslint-loader",
    exclude: exclude,
    options: {
      emitWarning: true,
      configFile: "./.eslintrc.js"
    }
  },
  {
    test: /\.(ts)x?$/,
    enforce: "pre",
    loader: "eslint-loader",
    exclude: /node_modules/,
    options: {
      emitWarning: true,
      configFile: "./.tslintrc.js"
    }
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      "file-loader",
      {
        loader: "image-webpack-loader",
        options: {
          bypassOnDebug: true, // webpack@1.x
          disable: true // webpack@2.x and newer
        }
      }
    ]
  },
  {
    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts/"
        }
      }
    ]
  }
]

exports.cssLoader = {
  loader: 'css-loader', // translates CSS into CommonJS so we can use @imports for CSS files in JS
  options: {
    sourceMap: true,
  },
};

exports.postCssLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: [
      require('autoprefixer')({}), // adds autoprefixing for browsers specified in browserslist in package.json https://github.com/browserslist/browserslist
      require('cssnano')({preset: ['default', { discardComments: { removeAll: true } }]}) // minimizes CSS
    ],
    sourceMap: true,
  }
};

exports.sassLoader = {
  loader: 'sass-loader',
  options: {
    sourceMap: true
  }
}

exports.configs = [
  {
    entry: "./src/index.tsx",
    output: {
      filename: "[name].[hash].js",
      path: DIST_DIR,
      publicPath: ASSET_PATH
    },
    module: {
      rules: rules
    },
    plugins: plugins,
    resolve: {
      extensions: extensions
    }
  },
  {
    entry: "./src/index.tsx",
    output: {
      filename: "[name]-desktop.[hash].js",
      path: DIST_DIR,
      publicPath: ASSET_PATH
    },
    module: {
      rules: rules
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: '../../Views/Home/Index.Desktop.cshtml',
        template: "./src/templates/Index.Desktop_template.cshtml"
      })
    ],
    resolve: {
      extensions: [".dt.tsx", ...extensions]
    }
  },
];
