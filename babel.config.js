module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        runtime: "automatic",
        importSource: "nativewind",
      },
    ],
  ],
};
