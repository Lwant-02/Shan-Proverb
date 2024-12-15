import { Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";

import SearchInput from "../../components/SearchInput";
import ProverbCard from "../../components/ProverbCard";
import EmptyState from "../../components/EmptyState";
import { useSearchProverb } from "../../libs/proverbsArray";
import Spinner from "../../components/Spinner";

export default function Search() {
  const { query } = useLocalSearchParams();
  const { data, isLoading, getSearchProverb } = useSearchProverb();

  useEffect(() => {
    if (query.trim() !== "") {
      getSearchProverb(query);
    }
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={data}
        renderItem={({ item }) => <ProverbCard item={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="mt-3 ">
              <Text className="text-gray-100 font-namTeng p-2 text-lg">
                ၶေႃႈမုၼ်း
              </Text>
              <View className="flex-row items-center justify-between">
                <Text className="text-white font-kamJing text-2xl p-2">
                  ႁူဝ်ၶေႃႈသွၵ်ႈႁႃ-
                  <Text className="text-secondary-200">{query}</Text>
                </Text>
                <Text className="text-white p-2 font-kamJing">
                  ႁူဝ်ၼပ်ႉ-{data.length}
                </Text>
              </View>
            </View>
            <SearchInput initialQuery={query} />
          </View>
        )}
        ListEmptyComponent={() =>
          isLoading ? (
            <Spinner />
          ) : (
            <EmptyState
              title="ႁႃၶေႃႈမုၼ်းဢမ်ႇႁၼ်!"
              subtitle={`သွၵ်ႈႁႃၶေႃႈမုၼ်း (${query}) ၼႆႉ ဢမ်ႇမီးၶႃႈ-ၶိုၼ်းတႅမ်ႈႁႃမႂ်ႇၶိုၼ်းၶႃႈ!`}
            />
          )
        }
      />
    </SafeAreaView>
  );
}
