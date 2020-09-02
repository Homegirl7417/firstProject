import React from "react";
import { StyleSheet, Alert } from 'react-native';
import Loading from "./Loading";
import Geolocation from '@react-native-community/geolocation';

export default class extends React.Component {
  getLocation = async () => {
    try {
      const location = await Geolocation.getCurrentPostion(info => console.log(info)); 
    } catch (error) {
      Alert.alert("Sorry");
    }
  }
  componentDidMount() {
    this.getLocation();
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

