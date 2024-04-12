import React from "react";
import { View } from "react-native";
import Constants from "expo-constants";

const Main = () => {
  return (
    <View
      style={{ marginTop: Constants.statusBarHeight, flexGrow: 1, padding: 20 }}
    ></View>
  );
};

export default Main;
