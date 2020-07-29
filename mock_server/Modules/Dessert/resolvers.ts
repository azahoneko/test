import {Dessert} from "./model";
import DB from "./db";

function dessertList() {
  return DB.list()
}

function addDessert(_, payload) {
  const dessert = new Dessert(payload.name, payload.calories, payload.fat, payload.carbs, payload.protein)

  DB.append(dessert)

  return dessert
}
function eraseAll() {
  DB.clean()

  return DB.list()
}

function deleteDessert(_, payload) {
  DB.del(payload.id)
  return DB.list()
}
export const DessertResolvers = {
  Query: {
    dessertList,
    deleteDessert,
    eraseAll
  },
  Mutation: {
    addDessert
  }
}
