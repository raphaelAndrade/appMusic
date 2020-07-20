import React from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH" :
      return {
        ...state,
        query: action.payload.query.value,
        valueSearch: action.payload.textSearch.value
      }
      break;
    case "SEARCHQUERY" :
      console.log(`dentro da caralha ${action.payload.resultSearch}`);
      return {
        ...state,
        //resultQuery: action.payload.resultSearch
      }
  }

}


export class Provider extends React.Component {
  state = {
    resultQuery: {},
    query: "adfadsf",
    valueSearch: "",
    dispatch: action => {
      this.setState(state => {
        return reducer(state, action);
      });
    },
  };

  // fetchSearch = () => {
  //   fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${this.state.query}:'${this.state.valueSearch}'`).then(response => {
  //     response
  //       .json()
  //       .then(data => {
  //         let dataArray = Object.values(data.data);
  //         this.setState({
  //           result: dataArray
  //         });
  //       })
  //       .catch(erro => {
  //         console.log(`this is a error ${erro}`);
  //       });
  //   });
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

