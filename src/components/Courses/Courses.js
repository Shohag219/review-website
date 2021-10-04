import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import "./Courses.css"
const Courses = () => {
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    fetch('./catagory.JSON')
    .then(res => res.json())
    .then( data => setCourse(data))

  },[]);
  return (
    <div className="row bg">
      
      
      <h1 className="mt-5 mb-5">Choice favourite course from top category</h1>
      {
        courses.map(course => <div className="col-md-3">
          <div className="cart">
            <div className="logo-img mb-3">
                <img src= {course.img} alt="" />
            </div>
            <h1>{course.title}</h1>
            <p>{course.description}</p>
            <Link to={`/details`}>
            <button className="btn btn-primary mt-4">Detiels</button>
            </Link>
          </div>
        </div>)
      }
      
    </div>
  );
};

export default Courses;