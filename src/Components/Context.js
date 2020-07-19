import React from "react";

const Context = React.createContext();

export class Provider extends React.Component {
  state = {
    resultQuery: {},
    query: ""
  };

  componentDidMount() {
      fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=track:'apaixonadinha'").then(response => {
        // console.log(response);
      response
        .json()
        .then(data => {
          let dataArray = Object.values(data.data);
          this.setState({
            result: dataArray
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

