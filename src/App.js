import React, { Component } from 'react';

class ContactList extends React.Component {
  render() {
    const people = [
      { name: 'Tyler '},
      { name: 'Karen '},
      { name: 'Richard '},
    ]

    return <ol>
      <people.map((person) => (
        <li key={person.name}>{person.name}</li> 
        ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">	      
      <header className="App-header">	        
        <img src={logo} className="App-logo" alt="logo" />	     
        <h1 className="App-title">Welcome to React</h1>	          
      </header>	          
      <p className="App-intro">	        ]}/>
        To get started, edit <code>src/App.js</code> and save to reload.	       
      </p>	          
    </div>	     
    );
  }
}

export default App;



	class App extends Component {
    render() {
   	  return (
       <div className="App">
        <ContactList contacts={[
         { name: 'Tyler '},
        { name: 'Karen' },
        { name: 'Richard '}
        ]}/>
       <ContactList contacts={[
          { name: 'Amanda' },
          { name: 'Mikenzi' },
          { name: 'Ryan' }
        ]}/>
      </div>
    );
  }