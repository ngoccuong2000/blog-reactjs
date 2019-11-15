import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header"><Header /></div>
        <div className="body"><Body /></div>
        <Footer />
      </div>

    )
  }
}

export default App;
