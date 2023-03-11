import React from "react-native";
import { View } from "react-native";
import Text from "./Text";
import Image from "./Image";

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Image
        source={{ uri: item.ownerAvatarUrl }}
        width="list"
        height="list"
        borderRadius="list"
        marginTop="list"
      />
      <Text fontWeight="bold" fontSize="subheading">
        Full name: {item.fullName}
      </Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
