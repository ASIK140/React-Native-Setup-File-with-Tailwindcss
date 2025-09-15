import { FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f0f0f0",
        },
        headerShadowVisible: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="house" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="CategoriesScreen"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="table-cells" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="RemindersScreen"
        options={{
          title: "Reminders",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="bell" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="SettingsScreens"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="gear" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#fff",
    borderTopWidth: 0,
    position: "absolute",
    bottom: 25,
    marginHorizontal: 20,
    height: 75,
    borderRadius: 15,
    paddingTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
});
