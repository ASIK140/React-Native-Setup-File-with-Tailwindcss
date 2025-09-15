import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export default function CategoriesCard({
  iconName,
  tasks,
  title,
  iconColor,
}: any) {
  return (
    <View className="bg-white w-[180px] h-[180px] rounded-2xl shadow-xl flex-col  justify-center items-center">
      <View
        className="p-5 flex justify-center items-center rounded-2xl mr-2"
        style={{ backgroundColor: `${iconColor}40` }}
      >
        <FontAwesome6 name={iconName} size={26} color={iconColor} />
      </View>

      <Text className="text-xl mt-5">{title}</Text>
      <Text className="text-gray-500 text-xl mt-2">{tasks} Tasks</Text>
    </View>
  );
}
