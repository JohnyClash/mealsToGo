import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Text> search</Text>
      </View>
      <View style={styles.list}>
        <Text> list</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchBar: {
    flexGrow: 0.04,
    backgroundColor: "green",
    width: "auto",
    justifyContent: "center",
  },
  list: {
    flexGrow: 1,
    paddingTop: 7,
    backgroundColor: "blue",
  },
});
