const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map", // to matchup errors with correct files.
    devServer: {
        watchFiles: ["./src/template.html"],
    },
});
