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

export default function UsersName() {
  return (
    <View style={styles.containerUser}>
      <Text style={styles.userText}>Ilona</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerUser: {
    fontFamily: "space-mono",
    borderWidth: 0,
    borderColor: "#000",
    marginTop: 21,
    marginLeft: 20,
    maxWidth: 200
  },
  userText: {
    fontSize: 31
  }
});
