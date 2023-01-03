import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i} //ALWAYS NEED KEY FOR ARRAY
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })
      }
    </div>
  );
}

export default CardList;
