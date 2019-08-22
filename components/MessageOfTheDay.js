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

import { MonoText } from "../components/StyledText";

export default function MessageOfTheDay() {
  return (
    <View style={styles.containerMessage}>
      <Text style={styles.messageText}>
        Summer time, let’s book a flight for vacation
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMessage: {
    fontFamily: "space-mono",
    borderWidth: 0,
    borderColor: "#000",
    marginTop: 21,
    marginLeft: 20,
    maxWidth: 275
  },
  messageText: {
    fontSize: 15,
    color: "#8D91A2"
  }
});
