const {
  shareAll,
  share,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "angular14-remote",

  exposes: {
    "./Routes": "./src/app/remote-entry/entry/entry.routes.ts",
  },

  shared: {
    ...share({
      "@angular/core": { singleton: true },
      "@angular/common": { singleton: true },
      "@angular/router": { singleton: true },
    }),
    // ...shareAll({
    //   singleton: true,
    //   strictVersion: true,
    //   requiredVersion: "auto",
    // }),
  },
});
