import React, { useState } from "react";
import "./Course.css";
import Catalouge from "./Catalouge";
import { useNavigate } from "react-router-dom";
const Course = () => {
  const [isOpen, setisOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="course">
      <span>About</span>
      <span
        onClick={() => {
          setisOpen((prev) => !prev);
        }}
      >
        Catalouge
      </span>
      <div> {isOpen && <Catalouge />}</div>

      <span>Community</span>
      <span>FAQ</span>
    </div>
  );
};

export default Course;
