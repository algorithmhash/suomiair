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

export default function Recommend() {
  return (
    <View style={styles.recommendContainer}>
      <View style={styles.textGroupUpper}>
        <Text style={styles.recommendTitle}>Recommend</Text>
        <Text style={styles.viewMoreLink}>View More</Text>
      </View>

      <View style={styles.recommendImages}>
        <View style={styles.recommendItem}>
          <Text style={styles.innerImageText}>
            Cheap Holiday Promo To Australia
          </Text>
          <Image
            style={styles.userImage}
            source={require("../assets/images/travel_options/firstimage.png")}
          />
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookText}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  recommendContainer: {
    borderWidth: 0,
    borderColor: "#000"
  },
  textGroupUpper: {
    marginBottom: 20
  },
  viewMoreLink: {
    color: "#FA6DB4",
    alignSelf: "flex-end",
    marginTop: -28,
    marginRight: 40
  },
  bookText: {
    color: "#fff",
    alignSelf: "center",
    marginTop: 2
  },
  bookButton: {
    backgroundColor: "#FA6DB4",
    position: "absolute",
    width: 75,
    height: 30,
    bottom: 10,
    right: 20,
    borderRadius: 2
  },
  recommendTitle: {
    borderWidth: 0,
    maxWidth: 150,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 40,
    padding: 0,
    borderColor: "#000",
    fontFamily: "space-mono",
    fontSize: 16,
    color: "#42436A"
  },
  recommendImages: {
    borderWidth: 0,
    borderColor: "#000"
  },
  recommendItem: {
    borderWidth: 0,
    borderColor: "#000",
    width: 190
  },
  innerImageText: {
    borderWidth: 0,
    borderColor: "#000",
    position: "absolute",
    color: "#fff",
    zIndex: 100,
    top: 20,
    left: 45,
    width: 125,
    fontSize: 11
  },
  userImage: {
    borderWidth: 0,
    marginLeft: 35,
    borderColor: "#000",
    width: 150,
    height: 200,
    borderRadius: 4
  }
});
