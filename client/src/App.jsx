import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from './pages/Profile';
import Header from "./components/Header";
import Sidebar from './components/Sidebar';


export default function App() {
    return (
      <BrowserRouter>
        <div className="flex h-screen">
          {/* Sidebar */}
          <Sidebar />
  
          {/* Content */}
          <div className="flex-1">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }

