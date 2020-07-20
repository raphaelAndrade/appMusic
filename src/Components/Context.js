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
      let resultArray = Object.values(action.payload);
      return {
        ...state,
        resultQuery: resultArray
      }
      break;
    case "TRACKLIST" :
      let trackListArray = Object.values(action.payload);
      console.log(trackListArray);
      return {
        ...state,
        tracklist: trackListArray
      }
  }

}

export class Provider extends React.Component {
  state = {
    resultQuery: {},
    query: "",
    valueSearch: "",
    dispatch: action => {
      this.setState(state => {
        return reducer(state, action);
      });
    },
    tracklist: {},
    selectedAlbum: ""
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;

