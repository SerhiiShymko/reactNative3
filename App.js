import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import LoginScreen from "./Screens/authScreens/LoginScreen";
import RegistrationScreen from "./Screens/authScreens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          style={styles.imgBg}
          source={require("./assets/images/imageBG.png")}>
          <RegistrationScreen />
          {/* <LoginScreen /> */}
          <StatusBar style="auto" />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  imgBg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
