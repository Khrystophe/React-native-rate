import React from "react-native";
import { View, StyleSheet } from "react-native";
import Text from "./Text";
import Image from "./Image";
import Layout from "./Layout";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemBackground,
  },
});

function formatCount(count) {
  if (count >= 1000) {
    const formattedCount = (count / 1000).toLocaleString(undefined, {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
    return `${formattedCount}k`;
  }
  return count.toLocaleString();
}

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Layout flexDirection="row" height="itemTop">
        <Image source={{ uri: item.ownerAvatarUrl }} style="list" />

        <Layout justifyContent="evenly" marginTop="marginTop">
          <Text fontWeight="bold" fontSize="subheading">
            {item.fullName}
          </Text>

          <Text color="textSecondary">{item.description}</Text>

          <Layout
            flexDirection="row"
            alignSelf="flexStart"
            marginTop="marginTop"
          >
            <Text
              backgroundColor="languageBackground"
              color="white"
              padding="language"
              borderRadius="soft"
            >
              {item.language}
            </Text>
          </Layout>
        </Layout>
      </Layout>

      <Layout flexDirection="row" justifyContent="around">
        <Layout
          alignItems="center"
          marginTop="marginTop"
          marginBottom="marginBottom"
        >
          <Text fontWeight="bold" fontSize="subheading">
            {formatCount(item.stargazersCount)}
          </Text>

          <Text color="textSecondary">Stars</Text>
        </Layout>

        <Layout
          alignItems="center"
          marginTop="marginTop"
          marginBottom="marginBottom"
        >
          <Text fontWeight="bold" fontSize="subheading">
            {formatCount(item.forksCount)}
          </Text>

          <Text color="textSecondary">Forks</Text>
        </Layout>

        <Layout
          alignItems="center"
          marginTop="marginTop"
          marginBottom="marginBottom"
        >
          <Text fontWeight="bold" fontSize="subheading">
            {item.reviewCount}
          </Text>

          <Text color="textSecondary">Reviews</Text>
        </Layout>

        <Layout
          alignItems="center"
          marginTop="marginTop"
          marginBottom="marginBottom"
        >
          <Text fontWeight="bold" fontSize="subheading">
            {item.ratingAverage}
          </Text>

          <Text color="textSecondary">Rating</Text>
        </Layout>
      </Layout>
    </View>
  );
};

export default RepositoryItem;
