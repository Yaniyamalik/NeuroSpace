import React from "react";
import "./Courses.css";
import image1 from "./1.png"
import image2 from "./2.png"
import image3 from "./3.jpg"
import image4 from "./4.avif"
const courses = [
  {
    imgSrc: image2,
    link: "https://www.udemy.com/course/3d-printing-design-skills-for-people-with-autism-dyslexia/?couponCode=LEARNNOWPLANS",
    title: "3D Printing Design for Autism, Dyslexic (Neurodiverse)",
    description:
      "#1 3D Printing Design Course for Autism Dyslexia Individuals; Step-by-step guide to 3D printing design by Udemy.",
  },
  {
    imgSrc: image1,
    link: "https://www.udemy.com/course/mobile-app-development-for-people-with-autism-dyslexia-etc/",
    title: "Mobile App Development for Autism, Dyslexia (Neurodiverse)",
    description:
      "#Mobile App Development Course for Autism Dyslexia Individuals; Step-by-step guide to mobile app development by Udemy.",
  },
  {
    imgSrc:image3,
    link: "https://www.udemy.com/course/graphic-designing-for-people-with-autism-dyslexia-etc/?couponCode=LEARNNOWPLANS",
    title: "Graphic Design for those with Autism, Dyslexia (Neurodiverse)",
    description:
      "#Graphic Design Course for Autism Dyslexia Individuals; Step-by-step guide to graphic designing by Udemy.",
  },
];

const Courses = () => {
  return (
    <div className="courses-container">
     
      <div className="upper">
        <div className="text1">
          <p>
            Welcome to our platform offering a curated selection of online
            courses designed specifically for neurodiverse individuals. We
            provide a range of accessible, flexible learning opportunities that
            cater to various needs and learning styles, ensuring everyone has
            the chance to thrive.
          </p>
          <br></br>
          <p>
            On this page, you'll find direct links to a variety of courses that
            can help you build new skills, pursue passions, and enhance
            personal growth. Our mission is to provide a learning experience
            that is both empowering and inclusive.
          </p>
        </div>
        </div>
     
       

     
      <div className="middle">
        <p>
          Click on the course links below to get started, and join a community
          where your learning journey is respected and celebrated.
        </p>
      </div>

     
      <div className="lower">
        {courses.map((course, index) => (
          <div key={index} className="box">
            <img src={course.imgSrc} alt={course.title} />
            <a href={course.link} target="_blank" rel="noopener noreferrer">
              {course.title}
            </a>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
