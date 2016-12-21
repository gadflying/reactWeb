module.exports = {
  cache: {
    cacheId: "ReactWeb",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "ReactWeb",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
