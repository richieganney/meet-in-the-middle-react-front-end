import React from "react";
import axios from "axios";
import MidlLocation from "./MidlLocation";

class MidlPlaces extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.places)
    this.state = { 
      places: this.props.places
    };
  }

  // getPlaces() {
  //   console.log("Frothmaster");
  //   console.log(this.props.midlMarker);
  //   if (this.props.midlMarker[0] !== undefined) {
  //     return axios
  //       .get(
  //         `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.props.midlMarker[0].position.lat}, ${this.props.midlMarker[0].position.lng}&radius=500&type=restaurant&key=AIzaSyAawXbpm33d8IIULhhrq-5JtHKwcacKbcY`
  //       )
  //       .then(res => this.setState({ places: [res.data.results] }));
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.places[0] !== undefined) {
  //     console.log(this.state.places[0][0])
  //     console.log(nextState.places[0][0])
  //     if (
  //       this.props.midlMarker !== nextProps.midlMarker ||
  //       this.state.places[0][0] !== nextState.places[0][0]
  //     ) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // }

  render() {
    console.log("render Places");
    console.log(this.props.places);
    return <div>{`${this.state.places}`}</div>;
  }
}

export default MidlPlaces;