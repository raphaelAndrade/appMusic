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
      let trackListArray = Object.values(action.payload[0]);
      return {
        ...state,
        tracklist: trackListArray,
        currentItemSelected: action.payload[1]
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
    currentItemSelected: {}
  };

  componentDidMount(){

    //  // Fetch Default Artist
      fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:'muse'`).then(response => {
        response
          .json()
          .then(data => {
            this.setState({
              resultQuery: data.data
            })
          })
          .catch(erro => {
            console.log(`this is a error ${erro}`);
          });
      });

    //   //Fetch Default list music
      fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/339677/tracks`).then(response => {
      response
        .json()
        .then(data => {
          // setResultSearch(data.data)
          this.setState({
            tracklist: data.data
          })
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

