import './App.css';
import { Routes, Route } from "react-router-dom"; 
 
import Navbar from "./components/Navbar";    
import ArgonautsListPage from "./pages/ArgonautsListPage"; 
// import Footer from "./components/Footer";     


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={ <ArgonautsListPage /> } />
    </Routes>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
