import React from "react";


export default function Popup(props) {
  return (
    <div className="fixed bg-gray flex top-0 right-0 bottom-0 left-0">
      <div className="flex near-white mw6 mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
        {props.children}
      </div>
    </div>
  )
}
