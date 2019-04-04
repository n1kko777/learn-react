const path = require("path"),
  HTMLplugin = require("html-webpack-plugin"),
  HtmlBeautifyPlugin = require("html-beautify-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    // какой модуль собирать (index.js)
    main: path.resolve(__dirname, "src", "index.js")
  },
  output: {
    // куда выводить сборку (dist)
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    // настройка сервера
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist")
  },
  module: {
    // настройка всех загрузчиков
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[hash].[ext]"
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HTMLplugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html"
    }),
    new HtmlBeautifyPlugin({
      config: {
        html: {
          end_with_newline: true,
          indent_size: 2,
          indent_with_tabs: true,
          indent_inner_html: true,
          preserve_newlines: true,
          unformatted: ["p", "i", "b", "span"]
        }
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
