import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function Cash() {
  return (
    <View style={styles.containerCash}>
      <Image
        style={styles.cashIcon}
        source={require("../../assets/images/cashIcon.png")}
      />
      <Text style={styles.cashText}>$ 4600</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCash: {
    fontFamily: "space-mono",
    borderWidth: 0,
    borderColor: "#000",
    width: 155,
    height: 50,
    marginLeft: 175,
    marginTop: -50,
    borderRadius: 6,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    color: "#8D91A2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  cashText: {
    alignSelf: "center",
    marginTop: 13.5
  },
  cashIcon: {
    position: "absolute",
    top: 18,
    left: 15,
    borderRadius: 2
  }
});
