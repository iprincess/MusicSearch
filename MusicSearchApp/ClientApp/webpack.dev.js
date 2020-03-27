const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = [
  merge(common.configs[0], {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      port: 3000, // need to use this port for iTunes CORS policy
      historyApiFallback: true
    },
    output: {
      filename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", common.cssLoader, common.postCssLoader]
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", common.cssLoader, common.postCssLoader, common.sassLoader]
        },
      ]
    }
  }),
  merge(common.configs[1], {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
     port: 6000
   },
    output: {
      filename: "[name]-desktop.js",
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", common.cssLoader, common.postCssLoader]
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", common.cssLoader, common.postCssLoader, common.sassLoader]
        },
      ]
    }
  })
];
