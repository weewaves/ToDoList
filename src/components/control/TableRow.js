import React, { useState } from "react";
import "./TableRow.css";

export default function TableRow(props) {
  var [checkboxValue, setCheckboxValue] = useState(props.data.isDone);

  function onRemove() {
    props.onRemove(props.data.id);
  }

  function onChange(e) {
    setCheckboxValue(checkboxValue ? false : true);
    props.onComplete({
      id: props.data.id,
      isDone: checkboxValue ? false : true,
    });
  }

  return (
    <div className="table-row">
      <div>
        <input type="checkbox" checked={checkboxValue} onChange={onChange} />
      </div>
      <div className={props.data.isDone ? "is-done" : ""}>
        <span>{props.data.name}</span>
      </div>
      <div>
        <i onClick={onRemove}>X</i>
      </div>
    </div>
  );
}
