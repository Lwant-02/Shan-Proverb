import { Image, View } from "react-native";
import { Tabs } from "expo-router";
import { icons } from "../../constants";

function TabIcon({ icon, color }) {
  return (
    <View className="justify-center items-center">
      <Image
        source={icon}
        tintColor={color}
        resizeMode="contain"
        className="w-6 h-6"
      />
    </View>
  );
}
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#222533",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "ၼႃႈႁိူၼ်း",
          tabBarIcon: ({ color }) => (
            <TabIcon color={color} icon={icons.home} />
          ),
          tabBarLabelStyle: {
            fontWeight: 700,
            fontFamily: "Pyidaungsu-Bold",
          },
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          headerShown: false,
          title: "ထုၵ်ႇၸႂ်",
          tabBarIcon: ({ color }) => (
            <TabIcon color={color} icon={icons.bookmark} />
          ),
          tabBarLabelStyle: {
            fontWeight: 700,
            fontFamily: "Pyidaungsu-Bold",
          },
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerShown: false,
          title: "လွင်ႈဢႅပ်ႉ",
          tabBarIcon: ({ color }) => (
            <TabIcon color={color} icon={icons.profile} />
          ),
          tabBarLabelStyle: {
            fontWeight: 700,
            fontFamily: "Pyidaungsu-Bold",
          },
        }}
      />
    </Tabs>
  );
}
