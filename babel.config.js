module.exports = {
  // presets: ['@vue/app']
  presets: [['@vue/app', { useBuiltIns: 'entry' }]]
  // presets: ['@vue/app', '@babel/preset-env']
  // plugins: ['@babel/plugin-transform-shorthand-properties']
  // presets: [
  //   ['@vue/app'],
  //   ['@babel/preset-env', {
  //     modules: 'commonjs',
  //     useBuiltIns: 'entry',
  //     'targets': {
  //       'browsers': ['ie >= 11']
  //     }
  //   }]
  // ],
  // plugins: ['@babel/plugin-transform-shorthand-properties']
}
// https://github.com/vuejs/vue-cli/issues/1568
// https://github.com/vuejs/vue-cli/issues/2637#issuecomment-425403329
// https://github.com/webpack/webpack/issues/4039
