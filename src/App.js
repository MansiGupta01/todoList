import Home from './Component/Home'
import React from 'react'
import SignupForm from './Component/SignupForm'
import Forget from './Component/Forget';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import LoginForm from './Component/LoginForm';
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/'exact Component={Home}/>
          <Route path='/login'exact Component={LoginForm}/>
          <Route path='/signup'exact Component={SignupForm}/>
          <Route path='/changePassword'exact Component={Forget}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
