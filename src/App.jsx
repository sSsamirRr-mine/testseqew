import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/header/head-not-user/header-not.jsx"; //header done
import Works from "./pages/main/works/items.jsx"; //works done
import Footer from "./pages/footer/footer.jsx"; //footer done
import Home from "./pages/main/home/home.jsx"; //Home done
import Me from "./pages/main/me/me.jsx"; //Me done
import Login from "./pages/main/login/login.jsx"; //Login done


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /> <Home /> <Footer /></>} />
        <Route path="/works" element={<><Header /> <Works /> <Footer /></>} />
        <Route path="/me" element={<><Header /> <Me /> <Footer /></>} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/video/:id" element={<Video()/> } /> */}

      </Routes>
    </Router>
  );
}

export default App;
