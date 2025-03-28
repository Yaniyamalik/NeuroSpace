import React from "react";
import "./Jobs.css"
import image1 from "./1.jpg"
import image2 from "./2.jpg"
import image3 from "./3.jpg"
import image4 from "./4.jpg"
import image5 from "./5.jpg"

const jobListings = [
  {
    imgSrc: image5, 
    link: "https://www.microsoft.com/en-us/diversity/inside-microsoft/cross-disability/neurodiversityhiring",
    title: "Microsoft Neurodiversity Hiring Program",
    description:
      "The Neurodiversity Hiring program seeks to attract talented neurodivergent candidates and provide the training and support needed for career growth and success.",
  },
  {
    imgSrc: image3, 
    link: "https://www.tcs.com/who-we-are/diversity-equity-inclusion/dei-framework-neurodiversity-gender-race-inclusion",
    title: "TCS Autism at Work Program",
    description:
      "TCS runs an 'Autism at Work' program, offering job roles in IT and software development to individuals on the autism spectrum.",
  },
  {
    imgSrc: image1,
    link: "https://www.autism-india.org/",
    title: "PWD Portals Corporate Workshops",
    description:
      "Atypical Advantage, India's largest livelihood platform for people with disabilities. Find jobs, book awareness workshops, and events by artwork.",
  },
  {
    imgSrc: image2,
    link: "https://atypicaladvantage.in/",
    title: "Action For Autism (AFA) - Aadhaar Vocational Centre",
    description:
      "The program for Work Behaviours Training caters to those adults who may seek work in open employment but need ‘on the job’ training to prepare for it.",
  },
];

const Jobs = () => {
  return (
    <div className="jobs-container">
      
      <div className="upper">
        <div className="text">
          <h1>Welcome to Neurodiverse Job Opportunities</h1>
          <p>
            We connect talented individuals with Autism, ADHD, Dyslexia, and
            other neurodiverse conditions to meaningful careers. Our platform
            partners with inclusive companies that value neurodiverse
            strengths.
          </p>
        </div>
      </div>

      
      <div className="lower">
        {jobListings.map((job, index) => (
          <div key={index} className="box">
            <img src={job.imgSrc} alt={job.title} />
            <a href={job.link} target="_blank" rel="noopener noreferrer">
              {job.title}
            </a>
            <p>{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
