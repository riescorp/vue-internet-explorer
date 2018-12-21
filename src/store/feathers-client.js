import feathers from '@feathersjs/feathers'
// eslint-disable-next-line
import socketio from '@feathersjs/socketio-client'
import rest from '@feathersjs/rest-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'
import { CookieStorage } from 'cookie-storage'

let apiServer = 'http://localhost:3050'

// eslint-disable-next-line
const socket = io(apiServer, { transports: ['websocket'] })

const restClient = rest(apiServer)

const feathersClient = feathers()
  .configure(restClient.fetch(window.fetch)) // rest
  .configure(auth({
    storage: new CookieStorage({ path: '/' })
  }))

export default feathersClient
