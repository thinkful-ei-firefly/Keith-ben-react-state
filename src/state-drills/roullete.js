import React from 'react';

class Roullete extends React.Component{
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false
  };


  handleClick = () => {
    this.setState({spinningTheChamber: true});
    this.timeOut = setTimeout(() => {
      let chamber = Math.ceil(Math.random() * 8);
      this.setState({chamber: chamber});
      this.setState({spinningTheChamber: false});
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  render(){
    let text = '';
    if (this.state.spinningTheChamber){
      text = 'Spinning the chamber and pulling the trigger ...';
    } else if (this.state.chamber === this.props.bulletInChamber){
      text = `BANG YOU'RE DEAD`;
    } else {
      text = `You're safe for now`;
    }

    return (
      <div>
        <p>{text}</p>
        <button type = "button" onClick = {() => this.handleClick()} >Pull the Trigger</button>
      </div>
    );
  }
 

}


export default Roullete;