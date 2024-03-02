import React, { useState } from "react";
import "./Course.css";
import { useNavigate } from "react-router-dom";
import { addCourse } from "./Data";
import { navigateToCourse } from "./handleClick";

const Catalouge = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigateToCourse(id, navigate);
  };

  return (
    <div className="addCour">
      {addCourse.map((cour) => (
        <div key={cour.id} onClick={() => handleClick(cour.id)}>
          {cour.name}
        </div>
      ))}
    </div>
  );
};

export default Catalouge;
