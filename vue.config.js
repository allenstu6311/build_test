const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  publicPath: "/build_test",
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, "build_test"),
  pages: {
    "build_test/ex-index": {
      entry: path.resolve(__dirname, "src/pages/ex-home/main"),
      template: path.resolve(__dirname, "src/pages/ex-home/index.html"),
      filename: "ex-index/index.html",
      title: "ex-index",
    },
    "build_test/co-index": {
      entry: path.resolve(__dirname, "src/pages/co-home/main"),
      template: path.resolve(__dirname, "src/pages/co-home/index.html"),
      filename: "co-index/index.html",
      title: "co-index",
    },
  },
  // chainWebpack: (config) => {
  //   if (process.env.NODE_ENV === "production") {
  //     config.plugin("html-ex-index").tap((args) => {
  //       args[0].filename = "ex-index/index.html";
  //       return args;
  //     });
  //     config.plugin("html-co-index").tap((args) => {
  //       args[0].filename = "co-index/index.html";
  //       return args;
  //     });
  //   }
  // },
  devServer: {
    //多入口配置需要使用devServer配置預設入口，因為main.js不會觸發
    setupMiddlewares: (middlewares, server) => {
      server.app.get("/", (req, res) => {
        res.redirect("/build_test/co-index/");
      });
      return middlewares;
    },
    // historyApiFallback: true
  },
});
