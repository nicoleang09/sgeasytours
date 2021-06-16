import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Context } from "../components/Context";

export default function RecommendationsScreen() {
  const dataList = React.useContext(Context);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightsalmon",
      }}
    >
      <Text>{dataList.name}</Text>
      <Text>Hi I am the Recommendations screen!</Text>
    </View>
  );
}
