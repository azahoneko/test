import {v4} from 'uuid'
interface dessert {
  readonly id: string,
  name: string
  calories: number
  fat: number
  carbs: number
  protein: number
}

export class Dessert implements dessert{
  readonly id: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;

  constructor(name, calories, fat, carbs, protein) {
    this.id = v4()
    this.name = name
    this.calories = calories
    this.fat = fat
    this.carbs = carbs
    this.protein = protein
  }

}

export const DessertDef = `
  type Dessert {
    id: String
    name: String!
    fat: Int!
    calories: Int!
    carbs: Int!
    protein: Int!
  }
  
  type Query {
    dessertList: [Dessert]
    deleteDessert(id: String): [Dessert]
  }
  
  type Mutation {
    addDessert(name: String, fat: Int, calories: Int, carbs: Int, protein: Int): Dessert
  }
`
