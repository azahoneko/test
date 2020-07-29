import express from 'express';
import { ApolloServer } from 'apollo-server-express';

interface Middleware {
  path?: string
  handler: Function | Function[],
  method?: string,
}


interface Module extends express.Router {}

interface Config {
  port: number,
  middlewares?: Middleware[] | [],
  modules?: Module[] | []
}

//Creating instance of express
const app = express()

export default function initServer(config: Config) {

  /**
   * Go through an array of middlewares and add each to express instance
   */
  config.middlewares.forEach((middleware: Middleware) => {
    const params = [];

    if (middleware.path) params.push(middleware.path)
    if (middleware.handler) {
      if (Array.isArray(middleware.handler)) params.push(...middleware.handler)
      else params.push(middleware.handler)
    }
    if (middleware.method) app[middleware.method.toLowerCase()](...params)
    else app.use(...params)
  })

  /**
   * Go through an array of modules and add each to express instance
   */
  config.modules.forEach((module: Module) => {
    app.use(module)
  })

  app.listen(config.port, () => {
    console.log(`Starting apollon server on port: ${config.port}`)
  })
}
