
import './App.css';
import Navbar from './components/Navbar';
import SearchComponent from './components/SearchComponent';
import JobCardSlider from './components/JobCardSlider';
import SeniorManagementJobs from './components/SeniorManagementJobs ';
import CustomSlider from './components/CustomSlider';
import MiddleContent from './components/MiddleContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
           <Navbar/>
           <SearchComponent/>
           <JobCardSlider/>
           <SeniorManagementJobs/>
           {/* <CustomSlider/> */}
           <MiddleContent/>
           <Footer/>
    </div>
  );
}

export default App;
