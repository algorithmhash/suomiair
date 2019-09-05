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

import Points from "./group/Points";
import Cash from "./group/Cash";

export default function PointsandCash() {
  return (
    <View style={styles.containerPointsnCash}>
      <Points />
      <Cash />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPointsnCash: {
    fontFamily: "space-mono",
    borderWidth: 0,
    borderColor: "#000",
    height: 100
  }
});
