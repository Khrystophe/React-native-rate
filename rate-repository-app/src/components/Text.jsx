import { Text as NativeText, StyleSheet, Platform } from "react-native";

import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
    fontWeight: theme.fontWeights.normal,
  },
  paddingLanguage: {
    padding: theme.padding.language,
  },
  paddingAppBar: {
    padding: theme.padding.appBar,
  },
  borderRadiusLanguage: {
    borderRadius: theme.borderRadius.soft,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    backgroundColor: theme.colors.languageBackground,
  },
  colorTextWhite: {
    color: theme.colors.textWhite,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({
  color,
  padding,
  borderRadius,
  fontSize,
  fontWeight,
  backgroundColor,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "white" && styles.colorTextWhite,
    padding === "language" && styles.paddingLanguage,
    padding === "appBar" && styles.paddingAppBar,
    borderRadius === "soft" && styles.borderRadiusLanguage,
    backgroundColor === "languageBackground" && styles.colorPrimary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
