import { Image as NativeImage, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  borderRadiusList: {
    borderRadius: theme.borderRadius.list,
  },
  listThumbnailWidth: {
    width: theme.width.listThumbnail,
  },
  listThumbnailHeight: {
    height: theme.height.listThumbnail,
  },
  listThumbnailTopMargin: {
    marginTop: theme.marginTop.listThumbnailTop,
  },
});

const Image = ({ borderRadius, width, height, marginTop, ...props }) => {
  const imageStyle = [
    borderRadius === "list" && styles.borderRadiusList,
    width === "list" && styles.listThumbnailWidth,
    height === "list" && styles.listThumbnailHeight,
    marginTop === "list" && styles.listThumbnailTopMargin,
  ];

  return <NativeImage style={imageStyle} {...props} />;
};

export default Image;
