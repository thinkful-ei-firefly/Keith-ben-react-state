import React from 'react';

class Accordion extends React.Component {
  state = {
    lastClicked: null
  };

  handleClick = index => {
    this.setState({
      lastClicked: index
    });
  };

  liRender() {
    return this.props.sections.map(section => {
      const item = this.props.sections.indexOf(section);
      if (item === this.state.lastClicked) {
        return (
          <li key={item}>
            <button
              onClick={() =>
                this.handleClick(item)
              }
            >
              {section.title}
            </button>
            <p>{section.content}</p>
          </li>
        );
      } else {
        return (
          <li key={item}>
            <button
              onClick={() =>
                this.handleClick(item)
              }
            >
              {section.title}
            </button>
          </li>
        );
      }
    });
  };

  render() {
    return <ul>{this.liRender()}</ul>;
  }
}

export default Accordion;
