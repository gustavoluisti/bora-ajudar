import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Sobre from './components/Sobre/Sobre'

const Component1 = (props) => {
  return <h1>{props.name}</h1>
}
class App extends Component {
  render() {
    return (
      <Router>
          <div>
            <Header />    
            <Route path="/" exact component={Home} />
            <Route path="/sobre" component={Sobre} />
            <Footer />  
          </div>
      </Router>
      
    )
  }
}

export default App;
