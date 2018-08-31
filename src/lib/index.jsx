import React, { Component } from "react";
import Button from '@material-ui/core/Button';

class SearchBarComponent extends Component {
  handleClick = () => {
  };

  render() {
    const { color, children } = this.props;
    return (
      <Button variant="raised" color="primary">
      Hello World
      </Button>
    );
  }
}

export default SearchBarComponent;
