import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

import theme from "../../theme";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
};

export default function CustomButton({
  title,
  onPress,
  disabled = false,
  style,
}: CustomButtonProps) {
  const buttonStyles = [styles.button, disabled && styles.disabled, style];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const baseButtonStyle: ViewStyle = {
  borderRadius: 5,
  alignItems: "center",
  padding: 10,
  marginTop: 20,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.btnPrimary,
    ...baseButtonStyle,
  },
  disabled: {
    backgroundColor: theme.colors.grey,
    ...baseButtonStyle,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.medium,
  },
});
