import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0,
    alert: 'tick'
  };

  counter = () => {
    console.log(this.state.count);
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount
    });
    if (newCount >= 8) {
      this.setState({ alert: 'BOOM!!!!' });
      clearInterval(this.interval);
    } else {
      if (newCount % 2 === 0) {
        this.setState({ alert: 'tick' });
      } else {
        this.setState({ alert: 'tock' });
      }
    }
    // this.interval();
    console.log(newCount);
  };

  interval = () => setInterval(this.counter(), 1000);

  componentDidMount() {
    this.interval();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>{this.state.alert}</p>
      </div>
    );
  }
}

export default Bomb;
