import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="sidenav">
        <Link to="/" style={{ color: 'white', margin: '20px' }}>Home</Link>
        <Link to="/create" style={{ color: 'white', margin: '20px' }}>Create A Crewmate!</Link>
        <Link to="/gallery" style={{ color: 'white', margin: '20px' }}>Crewmate Gallery</Link>
      </div>
      <div className="whole-page">
        <Outlet />
      </div>
    </>
  );
}

export default App;
