import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from './feathers-client'

const { service, auth, FeathersVuex } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex)
Vue.use(FeathersVuex)

export default new Vuex.Store({
  plugins: [
    // Setup the auth plugin.
    service('users', { paginate: true }),
    auth({ userService: 'users' })
  ]
})


// import Vue from 'vue'
// import Vuex from 'vuex'
// import feathersVuex from 'feathers-vuex'
// import feathers from '@feathersjs/feathers'
// import socketio from '@feathersjs/socketio-client'
// import rest from '@feathersjs/rest-client'
// import auth from '@feathersjs/authentication-client'
// import io from 'socket.io-client'

// // const { FeathersVuex } = feathersVuex(feathers(), { idField: '_id' })

// Vue.use(Vuex)
// // Vue.use(FeathersVuex)

// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   }
// })
