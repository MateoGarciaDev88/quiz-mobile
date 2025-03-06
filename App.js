import React from "react";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.screen} />

      <View style={styles.row}>
        <View style={styles.largeBox} />
        <View style={styles.largeBox} />
        <View style={styles.largeBox} />
      </View>

      <View style={styles.longBox} />

      <View style={styles.grid}>
        <View style={styles.smallBox} />
        <View style={styles.smallBox} />
        <View style={styles.smallBox} />
        <View style={styles.smallBox} />
        <View style={styles.smallBox} />
        <View style={styles.smallBox} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aliceblue",
    margin: 20,
    width: 'auto',
    borderRadius: 10,
  },

  screen: {
    height: 150,
    backgroundColor: 'coral',
    borderRadius: 10,
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  largeBox: {
    backgroundColor: 'powderblue',
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  
  longBox: {
    height: 40,
    marginBottom: 15,
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  smallBox: {
    width: 90,
    height: 90,
    marginBottom: 15,
    backgroundColor: 'steelblue',
    borderRadius: 10,
  },
});
