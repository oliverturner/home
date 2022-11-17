const OpenProps = require("open-props");
const postcssJitProps = require("postcss-jit-props");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    postcssJitProps(OpenProps),
    postcssPresetEnv({
      features: {
        "nesting-rules": true,
      },
    }),
  ],
};
