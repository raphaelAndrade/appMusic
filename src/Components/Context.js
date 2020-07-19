import React from "react";

const Context = React.createContext();

export class Provider extends React.Component {
  state = {
    contacts: [],
    name: "raphael"
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      response
        .json()
        .then(data => {
          this.setState({
            contacts: data
          });
        })
        .catch(erro => {
          console.log(`this is a error ${erro}`);
        });
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

