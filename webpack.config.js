const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    popup: "./src/popup.ts",
    content: "./src/content.ts",
    background: "./src/background.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  optimization: {
    minimize: false
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
