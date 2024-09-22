import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Home from './screens/Home';
import AddReminder from './components/AddReminder';
import EditReminder from './components/EditReminder';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/addreminder" element={<AddReminder />} />
          <Route exact path="/editreminder/:taskId" element={<EditReminder />} />
        </Routes>
      </Router>
    </div>
  );
};