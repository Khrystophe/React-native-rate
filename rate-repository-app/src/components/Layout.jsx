import { View, StyleSheet } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  layoutMarginTop: {
    marginTop: theme.margin.marginTop,
  },
  layoutMarginBottom: {
    marginBottom: theme.margin.marginBottom,
  },
  layoutPaddingLanguage: {
    padding: theme.padding.language,
  },
  layoutHeight: {
    height: theme.height.itemTop,
  },
  layoutFlexDirection: {
    flexDirection: theme.flexDirection.row,
  },
  layoutAlignSelf: {
    alignSelf: theme.alignSelf.flexStart,
  },
  layoutJustifyContentEvenly: {
    justifyContent: theme.justifyContent.evenly,
  },
  layoutJustifyContentAround: {
    justifyContent: theme.justifyContent.around,
  },
  layoutAlignItems: {
    alignItems: theme.alignItems.center,
  },
});

const Layout = ({
  marginTop,
  marginBottom,
  padding,
  height,
  flexDirection,
  alignSelf,
  justifyContent,
  alignItems,
  ...props
}) => {
  const layoutStyle = [
    marginTop === "marginTop" && styles.layoutMarginTop,
    marginBottom === "marginBottom" && styles.layoutMarginBottom,
    padding === "language" && styles.layoutPaddingLanguage,
    height === "itemTop" && styles.layoutHeight,
    flexDirection === "row" && styles.layoutFlexDirection,
    alignSelf === "flexStart" && styles.layoutAlignSelf,
    justifyContent === "evenly" && styles.layoutJustifyContentEvenly,
    justifyContent === "around" && styles.layoutJustifyContentAround,
    alignItems === "center" && styles.layoutAlignItems,
  ];

  return <View style={layoutStyle} {...props} />;
};

export default Layout;
