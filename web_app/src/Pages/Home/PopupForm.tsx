import React, {useState} from 'react'

const initialState = {
  fat: 0,
  name: '',
  carbs: 0,
  protein: 0,
  calories: 0,

}


export default function PopupForm(props) {
  const [values, setValue] = useState(initialState)

  function serValueFromInput(field: string, isNumber: boolean) {
    return function (e) {

      setValue({...values, [field]: (isNumber ? (+e.target.value) : e.target.value)})
    }
  }

  return (
    <div className="flex flex-column">
      <form className="pa4 black-80">
        <div>
          <label htmlFor="name" className="f6 b db mb2">Dessert Name*</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            onChange={serValueFromInput('name', false)}
          />
        </div>
        <div>
          <label htmlFor="calories" className="f6 b db mb2">Calories*</label>
          <input
            id="calories"
            name="calories"
            type="number"
            value={values.calories}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            onChange={serValueFromInput('calories', true)}
          />
        </div>
        <div>
          <label htmlFor="fat" className="f6 b db mb2">Fat*</label>
          <input
            id="fat"
            name="fat"
            value={values.fat}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            onChange={serValueFromInput('fat', true)}
          />
        </div>
        <div>
          <label htmlFor="carbs" className="f6 b db mb2">Carbs*</label>
          <input
            id="carbs"
            name="carbs"
            value={values.carbs}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            onChange={serValueFromInput('carbs', true)}
          />
        </div>
        <div>
          <label htmlFor="protein" className="f6 b db mb2">Protein*</label>
          <input
            id="protein"
            name="protein"
            value={values.protein}
            className="input-reset ba b--black-20 pa2 mb2 db w-100"
            onChange={serValueFromInput('protein', true)}
          />
        </div>
        <div
          className="f6 br1 ph3 pv2 mb2 dib white bg-dark-green"
          onClick={() => props.appendNewDessert(values)}
        >
          Submit
        </div>
      </form>
    </div>
  )
}
