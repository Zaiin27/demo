// import React from 'react';
// import './MiddleContent.css';

// const MiddleContent = () => {
//   const data = [
//     {
//       id: 1,
//       img: "https://s.rozee.pk/c/i/rockettwo.svg",
//       title: "Boost Your Job Hunt",
//       description: "Get a CV that highlights your profile and increase view by upto 50%",
//     },
//     {
//       id: 2,
//       img: "https://s.rozee.pk/c/i/freecviconrozee.webp",
//       title: "Free CV Review",
//       description: "Does your CV pass the 10-second test?Is it good enoughto make it to the shortlisted pile instead of rejected pile? Get free professional feedback on your CV from Rozee experts.",
//       isSecondOrThird: true, // Mark the second item
//     },
//     {
//       id: 3,
//       img: "https://s.rozee.pk/c/i/cv-writing.svg",
//       title: "CV Writing Service",
//       description: "ROZEE.PK CV experts know what recuiters are looking for. our Experts optimize your CV with the most searched keywords.",
//       isSecondOrThird: true, // Mark the third item
//     },
//   ];

//   return (
//    <div className='middle'>
//      <div className="middle-container">
//       <div className="inner-content">
//         {data.map((item) => (
//           <div
//             key={item.id}
//             className={`content-box ${item.isSecondOrThird ? 'second-and-third-item' : ''}`}
//           >
//             <img src={item.img} alt={item.title} className="content-image" />
//             <h2>{item.title || "Default Title"}</h2>
//             <p>{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//    </div>

  
//   );
// };

// export default MiddleContent;


import React from 'react';
import './MiddleContent.css';

const MiddleContent = () => {
  const data = [
    {
      id: 1,
      img: "https://s.rozee.pk/c/i/rockettwo.svg",
      title: "Boost Your Job Hunt",
      description: "Get a CV that highlights your profile and increase view by upto 50%",
    },
    {
      id: 2,
      img: "https://s.rozee.pk/c/i/freecviconrozee.webp",
      title: "Free CV Review",
      description: "Does your CV pass the 10-second test? Is it good enough to make it to the shortlisted pile instead of rejected pile? Get free professional feedback on your CV from Rozee experts.",
      isSecondOrThird: true, // Mark the second item
    },
    {
      id: 3,
      img: "https://s.rozee.pk/c/i/cv-writing.svg",
      title: "CV Writing Service",
      description: "ROZEE.PK CV experts know what recruiters are looking for. Our Experts optimize your CV with the most searched keywords.",
      isSecondOrThird: true, // Mark the third item
    },
  ];

  return (
    <div className='middle'>
      <div className="middle-container">
        <div className="inner-content">
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`content-box ${item.isSecondOrThird ? 'second-and-third-item' : 'first-part'}`}
              style={{ order: index + 1 }} // Ensuring order is maintained
            >
              <img src={item.img} alt={item.title} className="content-image" />
              <h2>{item.title || "Default Title"}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MiddleContent;
