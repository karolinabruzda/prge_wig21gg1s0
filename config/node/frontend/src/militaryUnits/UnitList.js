import React from "react";

import "./mu.css";

function UnitList({ units }) {
  // console.log(parks)
  return (
    <div className="unitList">
      {units.map((unit) => {
        return (
          <div className="unitList_Card" key={unit.id}>
            {unit.name}
          </div>
        );
      })}
    </div>
  );
}

export default UnitList;
