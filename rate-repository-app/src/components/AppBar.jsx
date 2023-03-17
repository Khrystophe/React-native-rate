import React, { useContext } from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text from "./Text";
import Layout from "./Layout";
import { useQuery, useApolloClient } from "@apollo/client";
import { SIGN_OUT } from "../graphql/queries";
import AuthStorageContext from "../contexts/AuthStorageContext";

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
  const authStorage = useContext(AuthStorageContext);

  const apolloClient = useApolloClient();
  const { data, error, loading } = useQuery(SIGN_OUT);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  const isLoggedIn = !!data?.me;

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

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
          {isLoggedIn ? (
            <Link to="/" style={{ minWidth: tabWidth }}>
              <Text style={styles.link} onPress={handleSignOut}>
                Sign Out
              </Text>
            </Link>
          ) : (
            <Link to="/SignIn" style={{ minWidth: tabWidth }}>
              <Text style={styles.link}>Sign In</Text>
            </Link>
          )}
        </Layout>
      </ScrollView>
    </View>
  );
};

export default AppBar;
