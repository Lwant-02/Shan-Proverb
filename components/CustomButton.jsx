import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({
  title,
  containerStyle,
  onPress,
  textStyle,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${containerStyle} bg-secondary-200 p-3 rounded-lg w-full items-center justify-center min-h[36px]`}
    >
      <Text className={`${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
}
