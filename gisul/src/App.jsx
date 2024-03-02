import { useState } from "react";

import Course from "./component/Course";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalouge from "./component/Catalouge";
import CourseDetail from "./component/CourseDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {<Route path="/" element={<Course />} />}
        {<Route path="/:id" element={<CourseDetail />} />}
        {<Route path="/:id" element={<CourseDetail />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
