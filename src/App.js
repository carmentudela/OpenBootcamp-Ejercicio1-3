import React from 'react';
import './App.css';
import ContactoCard from './components/contactoCard';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
      <div className='Card'>
        <ContactoCard 
          nombre="Jane"
          apellido="Doe"
          email="janedoe@example.com"
          conectado={true}
        /></div>
      </div>
    )
  }
}

export default App;

