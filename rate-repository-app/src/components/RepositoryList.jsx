import { FlatList, View, StyleSheet, Text } from "react-native";
import useRepositories from "../hooks/useRepositories";
import React from "react-native";
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const RepositoryList = () => {
  const { data, error, loading } = useRepositories();
  console.log(useRepositories());
  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  const repositoryNodes = data
    ? data.repositories.edges.map((edge) => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  const renderItem = ({ item }) => <RepositoryItem item={item} />;

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};
export default RepositoryList;
