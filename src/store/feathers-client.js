import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
let apiServer = 'http://localhost:3050'
const restClient = rest(apiServer)

const feathersClient = feathers()
  .configure(restClient.fetch(window.fetch))

export default feathersClient
