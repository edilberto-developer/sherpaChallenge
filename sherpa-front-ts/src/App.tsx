import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import { Posts, Users, Login, NotFound } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/users' element={<Users />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
