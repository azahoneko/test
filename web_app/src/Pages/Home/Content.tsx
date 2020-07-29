import React, {useState} from "react";
import {gql, useMutation, useQuery} from "@apollo/client";
import {Table} from "../../Framework/Components/Table";
import Popup from "../../Framework/Components/Popup";
import PopupForm from "./PopupForm";

const ERASE_ALL = gql`
  query{
    eraseAll
  
  }
`

const ADD_DESSERT = gql`
  mutation AddDessert($name: String!, $calories: Int!, $fat: Int!, $carbs: Int!, $protein: Int!){
    addDessert(name: $name, calories: $calories, fat: $fat, carbs: $carbs, protein: $protein) {
      id
      name
      fat
      calories
      carbs
      protein
    }
  }
`

const tableConfiguration = [
  {name: 'Dessert(100g serving)', key: 'name'},
  {name: 'Calories', key: 'calories'},
  {name: 'Fat (g)', key: 'fat'},
  {name: 'Carbs (g)', key: 'carbs'},
  {name: 'Protein (g)', key: 'protein'}
];

export default function (props) {
  const [isOpen, toggleModal] = useState(false);
  const [selected, Select] = useState([]);
  const [addDessert] = useMutation(ADD_DESSERT);

  function selectRow(id) {
    if (selected.find(s => s === id)) Select(selected.filter(s => s !== id))
    else Select([...selected, id])
  }

  function appendNewDessert(data) {
    addDessert({variables: data})

    toggleModal(false)
  }


  function deleteSelected() {
    if (!selected.length) return

  }

  return (
    <>
      <div className="fl w-90 center pa2 ph2 bg-light-gray">
        <div className="flex flex-row justify-between items-center">
          <div className="f2-l">Nutrition List</div>
          <div
            onClick={EraseAll}
            className="f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-green">
            Reset Data
          </div>
        </div>
        <div className="flex flex-row justify-between bg-washed-red pv3 ph2">
          <div className="dark-pink">selected {selected.length}</div>
          <div
            className="f6 link dim br1 ph3 pv2 mb2 dib dark-green bg-white"
            onClick={() => toggleModal(true)}>
            + Add New
          </div>
        </div>
        <Table config={tableConfiguration} data={props.data.dessertList} selectRow={selectRow} selected={selected} />
      </div>
      {isOpen ? <Popup><PopupForm appendNewDessert={appendNewDessert} /></Popup> : null}
    </>
  )

}
