import { Image, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

import { images } from "../constants";
import CustomButton from "./CustomButton";

export default function EmptyState({ title, subtitle, status }) {
  return (
    <View className="justify-center items-center px-4 ">
      <Image source={images.empty} resizeMode="contain" className="w-80 h-80" />
      <Text className="text-white font-namTeng text-xl p-3">{title}</Text>
      <Text className="text-secondary-200 text-center font-namTeng text-md">
        {subtitle}
      </Text>
      {status && (
        <CustomButton
          title="ၶူၼ်ႉႁႃ"
          textStyle="font-kamJing text-lg text-white"
          containerStyle="mt-10"
          onPress={() => router.push("/home")}
        />
      )}
    </View>
  );
}
