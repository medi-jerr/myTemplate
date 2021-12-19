import React from "react";
import { Category } from "./style";

function Categories({ data }) {
  return (
    <Category>
      {data.map((it, i) => (
        <div key={i} className="section">
          <h3>{it.title}</h3>
          <p>{it.descreption}</p>
        </div>
      ))}
    </Category>
  );
}

export default Categories;
