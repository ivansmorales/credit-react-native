import React from "react";
import { StyleSheet, TextInput } from "react-native";
import theme from "../../theme";

type CustomTextInputProps = {
  placeholder: string;
};

export default function CustomTextInput({ placeholder }: CustomTextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.mediumGrey}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    padding: 10,
  },
});
