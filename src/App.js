import { BrowserRouter as Router, Route,Routes, } from 'react-router-dom';
import { FeedbackProvider } from './context/FeedbackContext';
import Header from "./components/Header";
import FeedBackForm from './components/FeedBackForm';
import FeedBackList from "./components/FeedBackList";
import FeedBackStats from './components/FeedBackStats';
import AboutPage from './components/pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

function App(){

  return (
    <FeedbackProvider>
        <Router>
        <Header/>
          <div className="container">
          <Routes>
           <Route exact path="/" element={
             <>
            <FeedBackForm/>
            <FeedBackStats/>
            <FeedBackList/>
            </>
           } />
           <Route exact path="/about" element={<AboutPage/>}/>
          </Routes>
          <AboutIconLink/>
          </div>
        </Router>
     </FeedbackProvider>
        );

}

export default App;