import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

export default function UpcomingList({ icon_name, data, color }: any) {
  const handlePress = () => {
    alert("Button Pressed!");
  };
  return (
    <TouchableHighlight
      className="rounded-xl mt-5"
      underlayColor={"#000"}
      onPress={handlePress}
    >
      <View className="flex flex-row items-center  bg-white p-5 rounded-xl shadow-[0px_0px_15px_rgba(0,0,0,0.25)]">
        <View
          className="h-16 w-16 flex justify-center items-center rounded-xl mr-5"
          style={{ backgroundColor: `${color}40` }}
        >
          <FontAwesome6 name={icon_name} size={24} color={color} />
        </View>
        <View>
          <Text className="text-xl font-semibold">{data.title} </Text>
          <Text className="text-gray-400">{data.time}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
