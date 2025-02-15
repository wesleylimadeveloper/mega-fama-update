import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { WebView } from "./src/screens/WebView";

export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#37353A");
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#37353A" barStyle="light-content" />
      <WebView />
    </>
  );
}
