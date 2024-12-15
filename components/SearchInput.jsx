import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { usePathname, router } from "expo-router";

import { icons } from "../constants";

export default function SearchInput({ initialQuery }) {
  const [isFocus, setIsFocus] = useState();
  const [query, setQuery] = useState(initialQuery || "");
  const pathName = usePathname();

  return (
    <View
      className={`border-2 w-full h-16 px-4 bg-black-100  rounded-xl ${
        isFocus ? "border-secondary" : "border-black-200"
      } flex-row items-center justify-center space-x-4 mt-8 mb-5`}
    >
      <TextInput
        value={query}
        placeholder="သွၵ်ႈႁႃတီႈၼႆႈၶႃႈ...."
        className="text-white flex-1 font-kamJing"
        placeholderTextColor="lightgray"
        onChangeText={(e) => setQuery(e)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            Alert.alert(
              "ၶေႃႈၾၢင်ႉ!",
              "ၶႅၼ်းတေႃႈသႂ်ႇ ႁူဝ်ၶေႃႈသေလွင်ႈလွင်ႈသေၸွင်ႇၵွၺ်ႈသွၵ်ႈႁႃၶႃႈ!"
            );
            return;
          }
          if (pathName.startsWith("/search")) {
            router.setParams({ query });
          } else {
            router.push(`/search/${query}`);
            setQuery("");
          }
        }}
      >
        <Image source={icons.search} resizeMode="contain" className="w-6 h-6" />
      </TouchableOpacity>
    </View>
  );
}
