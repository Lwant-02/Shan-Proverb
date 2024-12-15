import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import React from "react";

import { useGlobalContext } from "../../context/useGlobalContext";
import ProverbCard from "../../components/ProverbCard";
import SearchInput from "../../components/SearchInput";
import { images } from "../../constants";
import EmptyState from "../../components/EmptyState";

const ListHeader = React.memo(({ saveProverbs }) => {
  return (
    <View className="my-6 px-4 space-y-6">
      <View className="flex-row justify-between items-center mt-3">
        <View className="gap-2">
          <Text className="text-secondary-100 font-pyiBold text-lg">
            ၵႂၢမ်းၵပ်းထုၵ်ႇ ဢၼ်ထုၵ်ႇၸႂ်ဝႆႉ
          </Text>
          <Text className="text-gray-50 font-kamJing">
            ႁူဝ်ၼပ်ႉ-{saveProverbs.length}
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

export default function save() {
  const { saveProverbs } = useGlobalContext();

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={saveProverbs}
        renderItem={({ item }) => <ProverbCard item={item} status="save" />}
        keyExtractor={(item) => item.key}
        ListHeaderComponent={<ListHeader saveProverbs={saveProverbs} />}
        ListEmptyComponent={() => (
          <EmptyState
            title="ဢမ်ႇမီးၶေႃႈမုၼ်း!"
            subtitle="ပႆႇမီးၵႂၢမ်းၵပ်းထုၵ်ႇ ဢၼ်ထုၵ်ႇၸႂ်ဝႆႉၶႃႈ!"
            status
          />
        )}
      />
    </SafeAreaView>
  );
}
