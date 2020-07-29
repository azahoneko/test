import {Dessert} from "./model";


class Db {
  private table: Dessert[]

  constructor() {
    this.table = []
  }

  append(dessert: Dessert) {
    this.table.push(dessert)
  }

  del(id: string){
    this.table = this.table.filter(dessert => dessert.id !== id);
  }

  list() {
    return this.table
  }

  clean() {
    return this.table = []
  }

}

export default new Db
