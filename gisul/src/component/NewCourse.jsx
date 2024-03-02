import React, { useState } from "react";
import { newCourse, nonTech } from "./Data";

import { Link } from "react-router-dom";
import "./Course.jsx";
const NewCourse = (id) => {
  return (
    <div className="addCour">
      {newCourse.map((newCor) => (
        <div key={newCor.id}>
          <Link to={`/${newCor.id}`}>{newCor.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NewCourse;
