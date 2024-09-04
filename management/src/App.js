import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LeftNav from './components/LeftNav';
import Main from './components/Main';
import Trains from './components/Trains';
import WriteNews from './components/WriteNews';
import Shownews from './components/Shownews';
import Passenger from './components/Passenger';
import AddTrain from './components/AddTrain';
import TrainTable from './components/TrainTable';
function App() {
  return (
    <Router >
      <Navbar/>
      <div className="row m-4">
        <div className="col-1 " ><LeftNav/></div>
        <div className="col-11 ">
      <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route exact path="/trains-details" element={<Trains/>}></Route>
        <Route exact path="/compose-news" element={<WriteNews/>}></Route>
        <Route exact path="/show-news" element={<Shownews/>}></Route>
        <Route exact path="/passenger-detail" element={<Passenger/>}></Route>
        <Route exact path="/add-train" element={<AddTrain/>}></Route>
        <Route exact path="/train-table" element={<TrainTable/>}></Route>







      </Routes>
        
        
        </div>

      </div>
    </Router>
  );
}

export default App;
