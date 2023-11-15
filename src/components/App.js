import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import AboutMe from "./AboutMe"
import Projects from "./Projects"
import Contact from "./Contact"
import NavigationBar from "./NavigationBar";



const App = () => {

    return (
    <BrowserRouter>
           <NavigationBar/>
           
       

            <Routes>

                <Route path="/" element={<Homepage/>}/> 
                <Route path="/about" element={<AboutMe/>}/> 
                <Route path="/projects" element={<Projects/>} />
                <Route path="/contact" element={<Contact/>} />
                
              
            </Routes>
            
        </BrowserRouter>

        
    );
  
}

export default App;
