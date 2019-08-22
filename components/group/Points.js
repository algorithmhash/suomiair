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

export default function Points() {
  return (
    <View style={styles.containerPoints}>
      <Image
        style={styles.pointsIcon}
        source={require("../../assets/images/pointsIcon.png")}
      />
      <Text style={styles.pointsText}>1130 pts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPoints: {
    fontFamily: "space-mono",
    borderWidth: 0,
    borderColor: "#000",
    borderRadius: 6,
    width: 155,
    height: 50,
    marginTop: 25,
    marginRight: 175,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    color: "#8D91A2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  pointsText: {
    alignSelf: "center",
    marginTop: 13.5
  },
  pointsIcon: {
    position: "absolute",
    top: 18,
    left: 15,
    borderRadius: 2
  }
});
