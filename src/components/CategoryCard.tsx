import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function CategoryCard({
  iconName,
  tasks,
  title,
  iconColor,
}: any) {
  return (
    <View className="p-4 bg-white  w-[48%] rounded-2xl shadow-xl">
      <View className="flex-row items-center mb-5">
        <View
          className="h-14 w-14 flex justify-center items-center rounded-xl mr-2"
          style={{ backgroundColor: `${iconColor}40` }}
        >
          <FontAwesome6 name={iconName} size={22} color={iconColor} />
        </View>

        <Text className="text-xl font-semibold">{title}</Text>
      </View>
      <View>
        <Text className="text-3xl font-bold">{tasks}</Text>
        <Text>Tasks</Text>
      </View>
    </View>
  );
}
