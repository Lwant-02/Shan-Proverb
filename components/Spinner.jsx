import { Text, View } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";

export default function Spinner() {
  return (
    <View className="justify-center items-center  mt-4 px-4 h-full ">
      <ActivityIndicator size="large" color="#FF8E01" />
      <Text className="text-[#ff8e01]">Loading...</Text>
    </View>
  );
}
