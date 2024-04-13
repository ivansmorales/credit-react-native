import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

import theme from "../../theme";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function CustomButton({
  title,
  onPress,
  disabled = false,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      style={disabled ? styles.disabled : styles.button}
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
