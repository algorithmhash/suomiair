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

export default function TravelOptions() {
  return (
    <View style={styles.containerTravelOptions}>
      <View style={styles.containerIcons}>
        <Image
          style={styles.flightIcon}
          source={require("../assets/images/travel_options/flight.png")}
        />
        <Text style={styles.iconText}>Flight</Text>
      </View>
      <View style={styles.containerIcons}>
        <Image
          style={styles.hotelIcon}
          source={require("../assets/images/travel_options/hotel.png")}
        />
        <Text style={styles.iconText}>Hotel</Text>
      </View>
      <View style={styles.containerIcons}>
        <Image
          style={styles.trainIcon}
          source={require("../assets/images/travel_options/train.png")}
        />
        <Text style={styles.iconText}>Train</Text>
      </View>
      <View style={styles.containerIcons}>
        <Image
          style={styles.busIcon}
          source={require("../assets/images/travel_options/bus.png")}
        />
        <Text style={styles.iconText}>Bus</Text>
      </View>
      <View style={styles.containerIcons}>
        <Image
          style={styles.moviesIcon}
          source={require("../assets/images/travel_options/movies.png")}
        />
        <Text style={styles.iconText}>Movies</Text>
      </View>
      <View style={styles.containerIcons}>
        <Image
          style={styles.attractionsIcon}
          source={require("../assets/images/travel_options/attractions.png")}
        />
        <Text style={styles.iconText}>Places</Text>
      </View>
      <View style={styles.containerIcons}>
        <Image
          style={styles.taxiIcon}
          source={require("../assets/images/travel_options/taxi.png")}
        />
        <Text style={styles.iconText}>Taxi</Text>
      </View>
      <View style={styles.containerIcons}>
        <Image
          style={styles.eatsIcon}
          source={require("../assets/images/travel_options/eats.png")}
        />
        <Text style={styles.iconText}>Eats</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTravelOptions: {
    display: "flex",
    fontFamily: "space-mono",
    borderWidth: 0,
    borderColor: "#000",
    // flex: 1,
    maxWidth: 360,
    alignSelf: "center",

    flexDirection: "row",
    justifyContent: "space-around",
    // alignContent: "stretch",
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  containerIcons: {
    marginRight: 19,
    marginLeft: 0,
    paddingLeft: 15,
    paddingRight: 0
  },
  flightIcon: {
    height: 50,
    width: 50
  },
  hotelIcon: {
    height: 50,
    width: 50
  },
  trainIcon: {
    height: 50,
    width: 50
  },
  busIcon: {
    height: 50,
    width: 50
  },
  moviesIcon: {
    height: 50,
    width: 50
  },
  attractionsIcon: {
    height: 50,
    width: 50
  },
  taxiIcon: {
    height: 50,
    width: 50
  },
  eatsIcon: {
    height: 50,
    width: 50
  },
  iconText: {
    color: "#6E6E6E",
    alignSelf: "center",
    marginBottom: 40
  }
});
