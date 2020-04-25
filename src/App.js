import React, { Component } from 'react';
import Ninja from './Ninja'
import AddNinja from './AddNinja';

//Referred to as container component, has a state{data}
class App extends Component {
  state = {
    ninjas: [
      {name: 'BlvckChocolvte', age: 25, belt: 'Blue', id: 1},
      {name: 'Miles', age: 15, belt: 'Yellow', id: 2},
      {name: 'Mary Jane', age: 20, belt: 'Black', id: 3},
      {name: 'John Doe', age: 35, belt: 'Red', id: 4},
    ]
  }
  render(){
    return (
      <div className="App">
        <h1>React Ninja</h1>
        <p>Welcome :)</p>
        <AddNinja />
        <Ninja ninjas={ this.state.ninjas } />
      </div>
      
    );
    
  }

  
}

export default App;
