import React from "react";
import Card from "./Card";
import TableRow from "./TableRow";

export default function Table(props) {
  return (
    <Card>
      {props.data &&
        props.data.map((item) => {
          return (
            <TableRow
              key={item.id}
              data={item}
              onComplete={props.onComplete}
              onRemove={props.onRemove}
            />
          );
        })}
    </Card>
  );
}
