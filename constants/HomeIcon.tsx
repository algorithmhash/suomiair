import React from "react";
import { Text } from "react-native";

const iconMap: any = {
  home: "⌂",
  search: "🗞",
  favorites: "♧",
  profile: "♤"
};

// const props: any = {...props};

// const color: any = (props: any) => props;

const Icon = ( name: any, style: any ) => {
  const icon: any = iconMap[name];

  return <Text style={[{ fontSize: 26, color: '#000' }, style]}>{icon}</Text>;
};

export default Icon;
