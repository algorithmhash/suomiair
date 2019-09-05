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

export default function UserImage() {
  return (
    <View style={styles.containerImage}>
      <Image
        style={styles.userImage}
        source={require("../assets/images/userimagestatic.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    fontFamily: "space-mono",
    borderWidth: 0,
    borderColor: "#000",
    maxWidth: 100,
    alignSelf: "flex-end",
    position: "absolute",
    top: 35,
    right: 10
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden"
  }
});
