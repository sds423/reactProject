import React,{Component} from 'react';
export default class Greeting extends React.Component {
  constructor() {
      super();
      this.state = {
          name: 0
      };
  }
  Increase=()=> {
      this.setState({
            name: this.state.name+1
      });
  }
Decrease=()=> {
      this.setState({
            name: this.state.name-1
      });
  }

  render() {
      return(
          <div>
              <p>{this.state.name}</p>
              <button onClick={this.Increase}>Increase</button>
              <button onClick={this.Decrease}>Decrease</button>
              
          </div>
      );
  }
  
}
