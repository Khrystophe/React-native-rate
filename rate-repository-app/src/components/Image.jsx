import { Image as NativeImage, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  listImageStyle: {
    borderRadius: theme.borderRadius.soft,
    width: theme.width.listImage,
    height: theme.height.listImage,
    margin: theme.margin.margin,
  },
});

const Image = ({ style, ...props }) => {
  const imageStyle = [style === "list" && styles.listImageStyle];

  return <NativeImage style={imageStyle} {...props} />;
};

export default Image;
