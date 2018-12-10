import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Sobre from './components/Sobre/Sobre'
import Campanhas from './components/Campanhas/Campanhas'
import Contato from './components/Contato/Contato'
import Admin from './components/Admin/Admin'

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
            <Route path="/campanhas" component={Campanhas} />
            <Route path="/contato" component={Contato} />
            <Route path="/admin" component={Admin} />
            <Footer />   
          </div>
      </Router>
      
    )
  }
}

export default App;
