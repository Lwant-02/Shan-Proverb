import { Text, View } from "react-native";
import React from "react";

export default function Card({ title, subTitle, icon, link, socialIcon }) {
  return (
    <View className={`bg-black-200 mt-6 rounded-md overflow-hidden `}>
      <Text className="text-white p-1 w-full text-center bg-secondary-200 font-kamJing">
        {title}
      </Text>
      <View className="items-center justify-center w-full mt-2">{icon}</View>
      <View className="items-center justify-center flex-row mt-3 mb-3">
        <Text className="items-center text-center justify-center text-gray-50 font-kamJing flex-1">
          {subTitle}
        </Text>
      </View>
    </View>
  );
}
