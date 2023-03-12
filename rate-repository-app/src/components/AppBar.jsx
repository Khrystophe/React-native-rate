import React from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";
import Layout from "./Layout";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    height: theme.height.appBar,
  },
  scrollContainer: {
    alignItems: "center",
  },
  link: {
    color: theme.colors.textWhite,
    padding: theme.padding.appBar,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
});

const windowWidth = Dimensions.get("window").width;

const AppBar = () => {
  const tabWidth = windowWidth / 3;

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
        <Layout flexDirection="row">
          <Link
            to="/RepositoryList"
            style={[styles.tab, { minWidth: tabWidth }]}
          >
            <Text style={styles.link}>Repositories</Text>
          </Link>
          <Link to="/SignIn" style={{ minWidth: tabWidth }}>
            <Text style={styles.link}>Sign In</Text>
          </Link>
        </Layout>
      </ScrollView>
    </View>
  );
};

export default AppBar;
