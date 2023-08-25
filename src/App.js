
import './App.css';
import Header from './Components/Header';
import * as React from "react"
import AllRoutes from './Routers/AllRoutes';
import Footer from './Components/Footer';


function App() {
  return (
    <div className='App'>
      <header>
        <Header/>
        <AllRoutes/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
