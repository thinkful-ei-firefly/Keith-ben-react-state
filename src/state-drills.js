import React from 'react';

class Drill1 extends React.Component{

  state = {
    who: 'World'
  };

  handleClick = name => {
    console.log('update who to ' + name);
    this.setState({who: name});
  };

  render(){
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button type = "button" onClick = {() => this.handleClick('World')} >World</button>
        <button type = "button" onClick = {() => this.handleClick('Friend')} >Friend</button>
        <button type = "button" onClick = {() => this.handleClick('React')} >React</button>
      </div>
    );
  }

}


export default Drill1;