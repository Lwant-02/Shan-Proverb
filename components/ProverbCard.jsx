import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { useGlobalContext } from "../context/useGlobalContext";

export default function ProverbCard({ item, status }) {
  const { addProverbs, saveProverbs, removeProverbs } = useGlobalContext();

  const isSaving = saveProverbs.some((savedItem) => savedItem.key === item.key);

  function handleAdd(item) {
    addProverbs(item.key, item.proverb_key);
  }

  return (
    <View className="flex-col bg-black-200 my-2 mx-4 rounded-lg shadow-lg overflow-hidden">
      <View className="flex justify-between items-center flex-row bg-secondary-200 ">
        <Text className="text-2xl p-2 font-yungHkio text-white ">
          ၵႂၢမ်းၵပ်းထုၵ်ႇ-{item.proverb_key}
        </Text>
        {!isSaving && (
          <TouchableOpacity onPress={() => handleAdd(item)} className="mr-3">
            <Ionicons name="heart" size={23} color="#1791c8" />
          </TouchableOpacity>
        )}
        {status === "save" && (
          <TouchableOpacity
            onPress={() => removeProverbs(item.key)}
            className="mr-3"
          >
            <Ionicons name="trash-bin" size={23} color="#FA4032" />
          </TouchableOpacity>
        )}
      </View>
      <Text className="text-white p-2 text-2xl font-pyiNum mt-4">
        {item.key}
      </Text>
    </View>
  );
}
