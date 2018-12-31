import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import auth from '@feathersjs/authentication-client'
import { CookieStorage } from 'cookie-storage'

import { fetch } from 'whatwg-fetch'

const restClient = rest('http://localhost:3050')

const feathersClient = feathers()
  .configure(restClient.fetch(fetch)) // rest
  .configure(auth({
    storage: new CookieStorage({ path: '/' })
  }))

export default feathersClient
