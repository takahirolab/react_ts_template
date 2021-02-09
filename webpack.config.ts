import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",
  devServer: {
    contentBase: `dist`,
    port: 8000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    // ここがわからない
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      hash: true,
    }),
  ],
  // ファイルの出力設定
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "react-svg-loader",
      },
    ],
  },
  resolve: {
    alias: {
      "@": `${__dirname}/src`,
      "@Hooks": `${__dirname}/src/hooks`,
      "@Pages": `${__dirname}/src/pages`,
      "@Types": `${__dirname}/src/types`,
      "@Components": `${__dirname}/src/components`,
      "@Images": `${__dirname}/src/images`,
      "@Constants": `${__dirname}/src/constants`,
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  // target: ["web", "es5"],
};
