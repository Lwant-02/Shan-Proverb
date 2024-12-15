import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import CustomButton from "../components/CustomButton";

export default function Page() {
  return (
    <SafeAreaView className="bg-primary h-full items-center">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center px-4 min-h-[85vh]">
          <Image
            source={images.logo}
            className="w-[300px] h-[300px] mt-5 object-contain"
            resizeMode="contain"
          />
          <View>
            <Text className="text-white font-namTeng text-2xl p-4 text-center">
              လဵပ်ႈႁဵၼ်းႁူႉ
            </Text>
            <Text className="text-secondary-200 font-kamJing text-4xl p-4 text-start">
              ၵႂၢမ်းၵပ်းထုၵ်ႇတႆး
            </Text>
          </View>
          <View className="justify-center items-center">
            <Text className="text-[#1791c8] text-center font-kamJing leading-[2] text-lg">
              ၽိင်ႈထုင်းၵႂၢမ်းတႆးႁဝ်းမီး ၽႂ်ၽႂ်ၵေႃႈ {"\n"}
              ယႃႇပေႁႂ်ႈလႆႈလူင်လိုမ်း ဢွၼ်ၵၼ်ၶတ်းၸႂ်သႂ်ႇႁႅင်းၵႂႃႇလႃႈ
            </Text>
          </View>
          <CustomButton
            title="ၵႂႃႇၼႃႈႁိူၼ်း"
            textStyle="font-kamJing text-lg text-white"
            containerStyle="mt-10"
            onPress={() => router.push("/home")}
          />
          <View className="mt-8">
            <Text className="text-gray-100 font-pRegular">
              Sources-Sai Mao
              <Text className="font-kamJing">(ထုင်ႉမၢဝ်းၶမ်း)</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
