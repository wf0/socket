module.exports = {
  // module用来解析不同的模块
  module: {
    rules: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      },
    ],
  },
};
