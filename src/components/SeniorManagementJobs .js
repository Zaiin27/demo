import React, { useState } from "react";
import "./SeniorManagementJobs.css";

const SeniorManagementJobs = () => {
  const jobs = [
    { id: 1, img: "/image/faisal.png", title: "Head SME Research", description: "Faisal Bank Limited" },
    { id: 2, img: "/image/image2.png", title: "Cheif Financial Officer", description: "Engi Plastic Limited" },
    { id: 3, img: "/image/image3.png", title: "Senior Project Manager", description: "international" },
    { id: 4, img: "/image/image4.png", title: "Global Media Leads", description: "Muslim Hands" },
    { id: 5, img: "/image/image5.png", title: "Senior Progect manager", description: "Pakistan single window" },
    { id: 6, img: "/image/faisal.png", title: "Head SME Research", description: "Faisal Bank Limited" },
    { id: 7, img: "/image/image2.png", title: "Cheif Financial Officer", description: "Engi Plastic Limited" },
    { id: 8, img: "/image/image3.png", title: "Senior Project Manager", description: "international" },
    { id: 9, img: "/image/image4.png", title: "Global Media Leads", description: "Muslim Hands" },
    { id: 10, img: "/image/image5.png", title: "Senior Progect manager", description: "Pakistan single window" },
  ];

  const cardsPerView = 4; // Number of visible cards
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, jobs.length - cardsPerView)
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="senior-jobs-slider">
      <h2 className="senior-jobs-title">Senior Management Jobs</h2>
      <div className="senior-slider-wrapper">
        <div
          className="senior-slider"
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)` }}
        >
          {jobs.map((job) => (
            <div key={job.id} className="senior-job-card">
              <img
                src={job.img || "https://via.placeholder.com/150"}
                alt={job.title}
                className="senior-job-image"
              />
              <h3 className="senior-job-title">{job.title}</h3>
              <p className="senior-job-company">{job.description}</p>
            </div>
          ))}
        </div>
        <div className="senior-slider-arrows">
          <button
            className="senior-slider-arrow"
            onClick={prevCard}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button
            className="senior-slider-arrow"
            onClick={nextCard}
            disabled={currentIndex + cardsPerView >= jobs.length}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeniorManagementJobs;
