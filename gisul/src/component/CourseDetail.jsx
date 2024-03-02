import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addCourse, newCourse, nonTech } from "./Data";
import { navigateToCourse } from "./handleClick";
import NewCourse from "./NewCourse";

const CourseDetail = () => {
  const { id } = useParams();
  console.log("id", id);
  const navigate = useNavigate();
  const [detail, setDetails] = useState({});
  console.log("details", detail);
  const fetchCourseDetails = () => {
    try {
      const allCourses = [...addCourse, ...nonTech, ...newCourse];
      const item = allCourses.find((itm) => itm.id === +id);
      setDetails(item);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };
  useEffect(() => {
    fetchCourseDetails();
  }, [id]);

  return (
    <div>
      {detail.name}

      <p>{detail.desc}</p>

      <NewCourse id={id} />
    </div>
  );
};

export default CourseDetail;
