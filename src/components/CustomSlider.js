// import React, { useState, useEffect } from "react";
// import './CustomSlider.css';
// const CustomSlider = () => {
//   const jobs = [
//     { id: 1, image: "./images/azadee.JPG", title: "Senior Manager", category: "Confidential" },
//     { id: 2, image: "./images/azadee.JPG", title: "Project Lead", category: "Confidential" },
//     { id: 3, image: "./images/azadee.JPG", title: "Team Supervisor", category: "Confidential" },
//     { id: 4, image: "./images/azadee.JPG", title: "Operations Head", category: "Confidential" },
//     { id: 5, image: "./images/azadee.JPG", title: "Strategy Analyst", category: "Confidential" },
//     { id: 6, image: "./images/azadee.JPG", title: "HR Manager", category: "Confidential" },
//     { id: 7, image: "./images/azadee.JPG", title: "Finance Lead", category: "Confidential" },
//     { id: 8, image: "./images/azadee.JPG", title: "IT Specialist", category: "Confidential" },
//   ];

//   const [startIndex, setStartIndex] = useState(0);

//   const nextSlide = () => {
//     setStartIndex((prev) => (prev + 1) % jobs.length);
//   };

//   const prevSlide = () => {
//     setStartIndex((prev) => (prev - 1 + jobs.length) % jobs.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000); // Auto slide every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const visibleJobs = jobs.slice(startIndex, startIndex + 6).concat(
//     jobs.slice(0, Math.max(0, startIndex + 6 - jobs.length))
//   );

//   return (
//     <div className="slider-wrapper">
//       {/* Heading and View All button */}
//       <div className="slider-header">
//         <h2 className="slider-heading">Senior Management Jobs</h2>
//         <a className="view-all-btn">View All</a>
//         <hr/>
//       </div>
      
//       {/* Slider */}
//       <button className="arrow left-arrow" onClick={prevSlide}>
//         {"<"}
//       </button>
//       <div className="slider-container">
//         <div className="slider">
//           {visibleJobs.map((job) => (
//             <div className="card" key={job.id}>
//               <img src={job.image} alt={job.title} className="job-image" />
//               <h3 className="job-title">{job.title}</h3>
//               <p className="job-category">{job.category}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="arrow right-arrow" onClick={nextSlide}>
//         {">"}
//       </button>
//     </div>
//   );
// };

// export default CustomSlider;

