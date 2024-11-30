import React, { useState, useEffect } from "react";
import './JobCardSlider.css'
const JobCardSlider = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      companyName: "Tech Solutions",
      price: "PKR 150,000 fixed",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: 2,
      title: "Backend Developer",
      companyName: "Web Innovations",
      price: "PKR 160,000 fixed",
      skills: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: "Full Stack Developer",
      companyName: "Dev Co.",
      price: "PKR 170,000 fixed",
      skills: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 4,
      title: "UI/UX Designer",
      companyName: "Design Hub",
      price: "PKR 120,000 fixed",
      skills: ["Figma", "Sketch", "Adobe XD"],
    },
    {
      id: 5,
      title: "DevOps Engineer",
      companyName: "Cloud Systems",
      price: "PKR 180,000 fixed",
      skills: ["AWS", "Docker", "Kubernetes"],
    },
    {
      id: 6,
      title: "Product Manager",
      companyName: "Innovative Solutions",
      price: "PKR 200,000 fixed",
      skills: ["Agile", "Leadership", "Product Strategy"],
    },
    {
      id: 7,
      title: "QA Engineer",
      companyName: "Quality Assurance Inc.",
      price: "PKR 130,000 fixed",
      skills: ["Automation", "Testing", "Selenium"],
    },
    {
      id: 8,
      title: "Project Manager",
      companyName: "PM Solutions",
      price: "PKR 160,000 fixed",
      skills: ["Project Management", "Scrum", "Agile"],
    },
  ];

  const cardsPerView = 4; // Number of cards to show at once
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < jobs.length - cardsPerView) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Loop back to the first set of cards
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(jobs.length - cardsPerView); // Loop back to the last set of cards
    }
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextCard, 3000); // 3000ms = 3 seconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [currentIndex]);

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div className="slider">
          {jobs
            .slice(currentIndex, currentIndex + cardsPerView)
            .map((job) => (
              <div className="card" key={job.id}>
                <div className="card-header">
                  <h3 className="title">{job.title}</h3>
                  <p className="company-name">{job.companyName}</p>
                  <p className="price">{job.price}</p>
                </div>
                <div className="skills">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="skill">
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="details-button">Project Details</button>
              </div>
            ))}
        </div>
      </div>
      <div className="arrows">
        <button className="arrow left" onClick={prevCard}>
          &#8592;
        </button>
        <button className="arrow right" onClick={nextCard}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default JobCardSlider;

