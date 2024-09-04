import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import HomeForm from './components/Home/HomeForm';
import Service from './components/Home/Service';
import Footer from './components/Home/Footer';
import Holidays from './components/Home/holiday/Holidays';
import DashBoard from './components/Dashboard/DashBoard';
import Passenger from './components/PassangerDetail/Passenger';
import Review from './components/Review/Review';
import Payment from './components/Payment/Payment';
import Ticket from './components/Ticket/Ticket';
import ShowHoliday from './components/Home/holiday/ShowHoliday';
import Login from './components/Registration & Login/Login';
import PersonalDetails from './components/Registration & Login/PersonalDetails';
import Chatbot from './components/chatbot/Chatbot';
import Profile from './components/chatbot/Profile';
import Trains from './components/extra/Trains';
import Hotels from './components/extra/Hotels';
import Holidayss from './components/extra/Holidayss';
import Flights from './components/extra/Flights';
import Buses from './components/extra/Buses';
function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<> <HomeForm />   <Chatbot/> <Service /> <Holidays /></>}></Route>
        <Route exact path="/train-dashboard" element={<><DashBoard/></>}></Route>
        <Route exact path="/passenger-detail" element={<><Passenger/></>}></Route>
        <Route exact path="/review-journey" element={<><Review/></>}></Route>
        <Route exact path="/payment" element={<><Payment/></>}></Route>
        <Route exact path="/ticket" element={<><Ticket/></>}></Route>
        <Route exact path="/show-holiday" element={<><ShowHoliday/></>}></Route>
        <Route exact path="/login" element={<><Login/></>}></Route>
        <Route exact path="/profile" element={<><Profile/></>}></Route>
        <Route exact path="/Trains" element={<><Trains/></>}></Route>
        <Route exact path="/Hotels" element={<><Hotels/></>}></Route>
        <Route exact path="/Holidayss" element={<><Holidayss/></>}></Route>
        <Route exact path="/Flights" element={<><Flights/></>}></Route>
        <Route exact path="/Buses" element={<><Buses/></>}></Route>



       
        <Route exact path="/registration/PersonalDetails" element={<><PersonalDetails/></>}></Route>
      
      </Routes>
     
      <Footer />
    </Router>


  );
}

export default App;
