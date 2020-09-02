import React from "react";
import { StyleSheet } from 'react-native';
import Loading from "./Loading";
import Geolocation from '@react-native-community/geolocation';

export default class extends React.Component {
  getLocation = async () => {
    const location = await Geolocation.getCurrentPostion; 
    console.log(location);
  }
  render() {    
    return (
      <Loading/>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 32,
  }
});

