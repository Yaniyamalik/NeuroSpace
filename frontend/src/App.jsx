
import './App.css'
import Login from './pages/Login'
import { Signup } from './pages/Signup'
import { Chatbox } from './pages/chatbox/Chatbox'
import { BrowserRouter as Router, Link,Routes, Route } from 'react-router-dom';
import Communitychat from './pages/chatbox/communitychat'
import { Support } from './pages/chatbox/support'
import { Mainpage } from './pages/toolkit/Chatbox'
import { Socialexercise } from './pages/toolkit/Socialexercise'
import { Anger } from './pages/toolkit/Anger'
import { ShopList } from './pages/toolkit/ShopList'
import { Home } from './pages/Home'
import { Navbar } from './navbar/Navbar'
import Footer from './pages/Fotter'
import Jobs from './pages/Jobs/Jobs';
import Courses from './pages/Courses/Courses';
function App() {
  return (
    <div className="app">
     <Router>
     <Navbar/>
    <Routes>
      
      <Route path="/social_exercise" element={<Socialexercise/>}/>
      <Route path="/toolkit" element={<Mainpage/>}/>
      <Route path="/anger" element={<Anger />} />
      <Route path="/shop" element={<ShopList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chatbox" element={<Chatbox />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/community" element ={<Communitychat/>}/>
      <Route path ="/chat" element={<Support/>}/>
      <Route path ="/" element={<Home/>}/>
      <Route path ="/jobs" element={<Jobs/>}/>
      <Route path ="/courses" element={<Courses/>}/>
     </Routes>
     <Footer/>
  </Router>
  
 
    </div>
  ) 
}

export default App
