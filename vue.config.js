// vue.config.js
module.exports = {
  baseUrl: '/',
  transpileDependencies: [
    '@feathers/authentication-client',
    '@feathers/commons',
    '@feathers/errors',
    '@feathers/feathers',
    '@feathers/rest-client',
    '@feathers/socketio-client',
    '@feathers/transport-commons',
    'debug'
  ]
}
