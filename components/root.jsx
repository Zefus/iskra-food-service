import ReactDOM from "react-dom";
import React from "react";

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    };
  }

  componentWillMount() {
    fetch(`/api/data`)
    .then(res => res.json())
    .then(body => {
      this.setState({ products: body });
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return;
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<Root />, root);
}
