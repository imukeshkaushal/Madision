
import './App.css';
import Header from './Components/Header';
import * as React from "react"
import AllRoutes from './Routers/AllRoutes';


function App() {
  return (
    <div className='App'>
      <header>
        <Header/>
        <AllRoutes/>
      
      </header>
    </div>
  );
}

export default App;
