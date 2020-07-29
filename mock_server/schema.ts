import {DessertDef} from "./Modules/Dessert/model";
import {DessertResolvers} from './Modules/Dessert/resolvers'

const {makeExecutableSchema} = require('graphql-tools');


export const schema = makeExecutableSchema({typeDefs: DessertDef, resolvers:DessertResolvers})
