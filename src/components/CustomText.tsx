import React from "react";
import { Text, StyleSheet, TextProps, TextStyle } from "react-native";

import theme from "../../theme";

type CustomTextProps = {
  children: string | string[];
  variant?: string;
  fontSize?: string;
  fontWeight?: string;
  restOfProps?: TextProps;
};

export default function CustomText({
  variant = "primary",
  fontSize = "small",
  children,
  restOfProps,
}: CustomTextProps) {
  const textStyles = [
    styles.text,
    variant === "primary" && styles.black,
    variant === "secondary" && styles.grey,
    variant === "error" && styles.red,
    fontSize === "large" && styles.header,
    fontSize === "small" && styles.paragraph,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.black,
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fonts.main,
  },
  grey: {
    color: theme.colors.grey,
  },
  black: {
    color: theme.colors.black,
  },
  red: {
    color: theme.colors.red,
  },
  header: {
    fontSize: theme.fontSizes.large,
    paddingVertical: 10,
    fontWeight: theme.fontWeights.bold as TextStyle["fontWeight"],
  },
  paragraph: {
    fontSize: theme.fontSizes.small,
    paddingVertical: 12,
  },
});
