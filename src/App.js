import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ReviewList from './components/ReviewList/ReviewList';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Header />
      <div className='banner1'>
        <img src="/banner1.png" alt="Banner1"/>
      </div>
      <div className='banner2'>
        <img src="/banner2.png" alt="Banner2"/>
      </div>
      <ReviewList />
      <div className='banner3'>
        <img src="/banner3.png" alt="Banner3" />
        
      </div>
      <Dashboard />

    </>
  )
}

export default App;
