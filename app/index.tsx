import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WeatherInfo from "@/components/sample/WeatherInfo";

export default function index() {
  return (
    <View style={styles.container}>
      <WeatherInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    marginRight: 10,
    flexGrow: 1,
  },
});
