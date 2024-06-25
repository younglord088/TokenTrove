
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import CoinPage from './pages/CoinPage';
// import ComparePage from './pages/ComparePage';
import DashboardPage from './pages/Dashboard';  
import HomePage from './pages/Home';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/dashboard' element={<DashboardPage />}/>
      {/* <Route path='/coin/:id' element={<CoinPage />}/>
      <Route path='/compare' element={<ComparePage />}/>
      <Route path='/watchlist' element={<WatchlistPage />}/> */}
      
      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
