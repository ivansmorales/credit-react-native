import React from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import theme from "../../theme";

type CustomTextInputProps = {
  error?: string;
} & TextInputProps;

export default function CustomTextInput({
  error,
  ...restOfProps
}: CustomTextInputProps) {
  const inputStyle: any = [styles.input, error && styles.error];
  return (
    <TextInput
      style={inputStyle}
      placeholderTextColor={theme.colors.mediumGrey}
      {...restOfProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.grey,
    padding: 10,
  },
  error: {
    borderColor: theme.colors.red,
  },
});
