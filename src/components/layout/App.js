import React from 'react'

import Header from './Header'
import PrivateContent from './PrivateContent'
import PublicContent from './PublicContent'

import './App.css'

const App = () => (
  <div className="App">
    <Header />
    <div className="container">
      <PublicContent />
      <PrivateContent />
    </div>
  </div>
);

export default App
