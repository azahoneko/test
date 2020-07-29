import * as React from "react";

interface Column {
  key: string
  name: string
}

export function Table({config, data, selectRow, selected}) {


  function renderTHead(columns: Column[]) {
    return (
      <tr className="pv3">
        <th className="fw6 bb b--black-20 tl pv2 bg-white"/>
        {columns.map((column, index) =>
          <th className="fw6 bb b--black-20 tl pv2 bg-white" key={index}>{column.name}</th>)}
      </tr>
    )
  }

  function renderTBodyRow(config: Column[], data, index) {

    return (
      <tr key={index}>
        <td key={data.id}>
          <div className="flex items-center" onChange={()=> selectRow(data.id)}>
            <input className="mr2" type="checkbox" value={selected.find(s => s.id=== data.id)}/>
          </div>
        </td>
        {config.map((c, i) => <td key={i} className="pv3 pr3 bb b--black-20">{data[c.key]}</td>)}
      </tr>
    )
  }

  return (
      <table className="f6 w-100">
        <thead>
        {renderTHead(config)}
        </thead>
        <tbody className="lh-copy">
        {data.map((row, index) => renderTBodyRow(config, row, index))}
        </tbody>
      </table>
  )
}
