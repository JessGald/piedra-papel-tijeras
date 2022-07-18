import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const icons = ["piedra", "papel", "tijeras"];

const DisplayResult = ({ userChoice, computerChoice }) => {
  return (
    <>
      <View style={styles.column}>
        <FontAwesome5
          name={icons[userChoice - 1]}
          size={64}
          color={"#f9d835"}
          solid
          style={userChoice === 3 ? styles.scissorsLeftIcon : styles.leftIcon}
        />
        <Text style={styles.playerName}>Tu nombre</Text>
      </View>

      <View style={styles.column}>
        <FontAwesome5
          name={icons[computerChoice - 1]}
          size={64}
          color={"#f9d835"}
          solid
          style={
            computerChoice === 3 ? styles.scissorsRightIcon : styles.rightIcon
          }
        />
        <Text style={styles.playerName}>Ordenador</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  playerName: {
    color: "#373737",
    marginTop: 16,
    fontSize: 16,
  },

  leftIcon: {
    transform: [{ rotateZ: "80deg" }],
  },

  scissorsLeftIcon: {
    transform: [{ rotateZ: "180deg" }, { rotateX: "180deg" }],
  },

  rightIcon: {
    transform: [{ rotateZ: "180deg" }, { rotateX: "180deg" }],
  },
});

export default DisplayResult;
