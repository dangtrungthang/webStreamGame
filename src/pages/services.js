import React from "react";
import {Styles, View, Text} from "react-ult";

export  default function Services() {
  return (
    <View style={styles.root}>
      <Text style={styles.game}>
        {"Game"}
      </Text>
      <Text style={styles.tinTức}>
        {"Tin tức"}
      </Text>
    </View>
  );
}

const styles = {
  root: Styles.createViewStyle({
    backgroundColor: "rgb(255, 242, 255)",
  }),
  game: Styles.createTextStyle({
    color: "rgb(0, 0, 255)",
    fontSize: 24,
    fontWeight: "700",
  }),
  tinTức: Styles.createTextStyle({
    color: "rgb(0, 0, 0)",
    fontSize: 24,
    fontWeight: "700",
  }),
}