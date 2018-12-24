module.exports = {
  presets: [
    ['@vue/app', {
      // modules: 'commonjs',
      useBuiltIns: 'entry'
    }]
  ],
  plugins: ['@babel/plugin-transform-shorthand-properties']
}
// https://github.com/vuejs/vue-cli/issues/1568
// https://github.com/vuejs/vue-cli/issues/2637#issuecomment-425403329
// https://github.com/webpack/webpack/issues/4039
