import bodyParser from 'body-parser';
import cors from 'cors';
import {graphqlExpress} from "apollo-server-express/dist/expressApollo";
import Server from './Server'
import {schema} from "./schema";

const config = {
  port: 3000,
  middlewares: [
    {handler: cors()},
    {handler: bodyParser.json()},
    {handler: graphqlExpress({schema, schemaHash: null}), path: "/graphql", method: 'post'}
  ],
  modules: []
}


Server(config)
