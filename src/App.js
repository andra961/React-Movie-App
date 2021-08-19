import React from 'react';

//Router
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 

//Components
import Header from './components/header';
import Home from './components/home';
import Movie from './components/movie';
import NotFound from './components/notFound';
import Login from './components/login';

//Context
import UserProvider from './context';

const App = () => (
    <Router>
      <UserProvider>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/:movieId" element={<Movie />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
      </UserProvider> 
    </Router>
  );

export default App;
