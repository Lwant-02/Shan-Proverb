import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import React, { useMemo } from "react";

import ProverbCard from "../../components/ProverbCard";
import images from "../../constants/images";
import SearchInput from "../../components/SearchInput";
import { proverbsArray } from "../../libs/proverbsArray";

const ListHeader = React.memo(() => {
  return (
    <View className="my-6 px-4 space-y-6">
      <View className="flex-row justify-between items-center mt-3">
        <View className="gap-2">
          <Text className="text-gray-50 font-kamJing">မႂ်ႇသုင်ၶႃႈ</Text>
          <Text className="text-secondary-100 font-pyiBold text-lg">
            ယိၼ်းလီႁပ်ႉတွၼ်ႊယူႇၶႃႈ
          </Text>
        </View>
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-14 h-14"
        />
      </View>
      <SearchInput />
    </View>
  );
});

export default function home() {
  const memoFlatlist = useMemo(() => {
    return (
      <FlatList
        data={proverbsArray}
        renderItem={({ item }) => <ProverbCard item={item} />}
        ListHeaderComponent={() => <ListHeader />}
      />
    );
  }, [proverbsArray]);
  return (
    <SafeAreaView className="bg-primary h-full">{memoFlatlist}</SafeAreaView>
  );
}
