
import React from "react";
import { StyleSheet, Text, View, Image, StatusBar, Platform } from "react-native";
import ContactList from "./ContactList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <View style={styles.container}>
        <ContactList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop:(Platform.OS === 'ios') ? 20 : StatusBar.currentHeight + 5 // Fix status bar overflow issue in android
  }
});