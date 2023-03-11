import { View, StyleSheet, Pressable, Alert } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    height: 100,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => Alert.alert("You pressed the text!")}>
        <Text
          style={{ color: "#fff", padding: 25 }}
          fontWeight="bold"
          fontSize="subheading"
        >
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
