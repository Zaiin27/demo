
// import React from "react";
// import "./SearchComponent.css";

// const SearchComponent = () => {
//   return (
//     <div className="banner-container">
//       <div className="banner-image">
//         <div className="banner-overlay">
//           {/* Heading */}
//           <h1 className="banner-heading">
//             Find a <span className="highlight">Job<span className="dot">.</span></span> You <span className="highlight">Love</span>
//           </h1>

//           {/* Search Bar */}
//           <div className="search-bar">
//             <input
//               type="text"
//               className="search-input"
//               placeholder="Job Title, Skill, or Company"
//             />
//             <button className="search-button">Search</button>
//           </div>

//           {/* Circles Section */}
//           <div className="circles-section">
//             {/* Get Started Circle */}
//             <div className="circle get-started">
//             <i className="circle-icon">📄</i>
//               <span className="circle-text">Get Started</span>
//             </div>

        

//             {/* Azadi Image - Positioned in bottom-right */}
// <div className="circle azadi">
//   <img
//     src="https://s.rozee.pk/v6/i/fl/azadee-rozee.svg
// "
//     alt="Azadi Logo"
//   />
// </div>

//           </div>
//         </div>

//         {/* Bottom-right image */}
//         <img
//           src="https://s.rozee.pk/c/i/bg-blue-main.webp"
//           alt="Additional Banner Icon"
//           className="bottom-right-image"
//         />

//         {/* Bottom-right text */}
//         <div className="bottom-right-text-container">
//           <h3 className="bottom-right-heading">Earn Extra Money</h3>
//           <p className="bottom-right-subtitle">Find freelance side hustles</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchComponent;



import React from "react";
import "./SearchComponent.css";

const SearchComponent = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="banner-container">
        <div className="banner-image">
          <div className="banner-overlay">
            {/* Heading */}
            <h1 className="banner-heading">
              Find a <span className="highlight">Job<span className="dot">.</span></span> You <span className="highlight">Love</span>
            </h1>

            {/* Search Bar */}
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Job Title, Skill, or Company"
              />
              <button className="search-button">Search</button>
            </div>

            {/* Circles Section */}
            <div className="circles-section">
              {/* Get Started Circle */}
              <div className="circle get-started">
                <i className="circle-icon">📄</i>
                <span className="circle-text">Get Started</span>
              </div>
            </div>
          </div>

          {/* Azadi Image - Positioned in bottom-right */}
          <div className="circle azadi">
            <img
              src="https://s.rozee.pk/v6/i/fl/azadee-rozee.svg"
              alt="Azadi Logo"
            />
          </div>

          {/* Bottom-right image */}
          <img
            src="https://s.rozee.pk/c/i/bg-blue-main.webp"
            alt="Additional Banner Icon"
            className="bottom-right-image"
          />

          {/* Bottom-right text */}
          <div className="bottom-right-text-container">
            <h3 className="bottom-right-heading">Earn Extra Money</h3>
            <p className="bottom-right-subtitle">Find freelance side hustles</p>
          </div>
        </div>
      </div>

      {/* New Div for Freelance Side Hustles Text */}
      <div className="freelance-text-container">
        <p className="freelance-text">Freelance Side Hustles - Make Extra Income</p>
      </div>
    </div>
  );
};

export default SearchComponent;
