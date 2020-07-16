import React, { useState } from "react";
import Card from "./Card";
import "./InputForm.css";

export default function InputForm(props) {
  var [workName, setWorkName] = useState("");

  function onAdd() {
    props.onAdd({ name: workName });
    setWorkName("");
  }

  return (
    <Card>
      <form>
        <div className="input-form-wrapper">
          <div>
            <input
              type="input"
              value={workName}
              onChange={(e) => {
                setWorkName(e.target.value);
              }}
            />
          </div>
          <div>
            <input type="button" value="Add" onClick={onAdd} />
          </div>
        </div>
      </form>
    </Card>
  );
}
