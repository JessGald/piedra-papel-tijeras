import React, { useState, useRef } from "react";
import { StyleSheet, SafeAreaView, Text, View, Animated } from "react-native";
import Constants from "expo-Constants";
import DisplayText from "./DisplayText";
import Acciones from "./Acciones";

export default function PiedraPapel() {
  const [userChoice, setUserChoice] = useState(0);
  const [computerChoice, setComputerChoice] = useState(0);
  const [result, setResult] = useState("");
  const [canPlay, setPlay] = useState(true);

  const fadeAnimation = useRef(new Animated.Value(1)).current;

  function play(choice) {
    const randomComputerChoice = Math.floor(Math.random() * 3) + 1;
    let resultString = "";

    if (choice === 1) {
      resultString = randomComputerChoice === 3 ? "GANAR" : "PERDER";
    } else if (choice === 2) {
      resultString = randomComputerChoice === 1 ? "GANAR" : "PERDER";
    } else {
      resultString = randomComputerChoice === 2 ? "GANAR" : "PERDER";
    }

    if (choice === randomComputerChoice) {
      resultString = "EMPATE";
    }

    setUserChoice(choice);
    setComputerChoice(randomComputerChoice);

    setTimeout(() => {
      setResult(resultString);
    }, 300);

    Animated.sequence([
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    setPlay(false);
    setTimeout(() => {
      setPlay(true);
    }, 600);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.result}>
          <Animated.Text
            style={[styles.resultText, { opacity: fadeAnimation }]}
          >
            {result}
          </Animated.Text>
        </View>
        <View style={styles.screen}>
          {!result ? (
            <Text style={styles.readyText}>Vamos a jugar</Text>
          ) : (
            <DisplayText
              userChoice={userChoice}
              computerChoice={computerChoice}
            />
          )}
        </View>
        <Acciones play={play} canPlay={canPlay} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  content: {
    flex: 1,
    marginBottom: 5,
    backgroundColor: "#33FF4C",
  },

  result: {
    height: 100,
    justifyContent: "flex",
    alignItems: "center",
  },

  resultText: {
    fontSize: 48,
    fontWeight: "bold",
  },

  screen: {
    flex: 1,
    flexDirection: "row",
  },

  readyText: {
    marginTop: 48,
    alignSelf: "center",
    textAlign: "center",
    width: "100%",
    fontSize: 48,
    fontWeight: "bold",
  },
});
