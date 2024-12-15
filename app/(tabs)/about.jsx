import { Text, View, SafeAreaView, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { images } from "../../constants";
import Card from "../../components/Card";

export default function About() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="flex  my-7 px-4 space-y-6 ">
          <View className="items-center justify-center flex-1 ">
            <View className="bg-transparent border border-white rounded-full shadow-lg overflow-hidden w-32 h-32 items-center justify-center p-2">
              <Image
                source={images.logo}
                resizeMode="contain"
                className="w-full h-full"
              />
            </View>
            <View className="mt-5 items-center justify-center">
              <Text className="text-2xl p-3 font-pRegular font-bold uppercase">
                <Text className="text-secondary-200">Shan</Text>{" "}
                <Text className="text-[#1791c8]">Proverbs</Text>
              </Text>
            </View>
          </View>
          <Card
            title="ၽူႈၶူင်သၢင်ႈApp"
            icon={<Ionicons name="briefcase" size={30} color="#1791c8" />}
            subTitle="Tzai Naw Mong"
            link="https://www.facebook.com/nawmong02/"
            socialIcon={
              <Ionicons name="logo-facebook" size={24} color="white" />
            }
          />
          <Card
            title="ၶေႃႈမုၼ်း"
            icon={<Ionicons name="library" size={30} color="#1791c8" />}
            link="https://www.facebook.com/profile.php?id=61569069823862"
            subTitle="Sai Mao(ထုင်ႉမၢဝ်းၶမ်း)"
            socialIcon={
              <Ionicons name="logo-facebook" size={24} color="white" />
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
