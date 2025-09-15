import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ReminderList({ title, date, completed }: any) {
  return (
    <View className="flex flex-row items-center gap-4 px-5 py-5 bg-white rounded-2xl mt-5 shadow-2xl">
      <View>
        <TouchableOpacity
          className=" border border-gray-300 py-[5px] px-[6px] rounded-md"
          style={completed && styles.checked}
        >
          <FontAwesome6
            name="check"
            size={18}
            color={completed ? "#fff" : "#000"}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          className="text-xl font-semibold"
          style={completed && styles.titleCheck}
        >
          {title}
        </Text>
        <View className="flex flex-row items-center mt-2">
          <FontAwesome6 name="clock" color="gray" />
          <Text className="ml-1 mr-5 text-gray-500">{date.time}</Text>
          <FontAwesome6 name="calendar" color="gray" />
          <Text className="ml-1 text-gray-500">{date.day}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checked: {
    backgroundColor: "#5E58EC",
  },
  iconCheck: {
    color: "#fff",
  },
  titleCheck: {
    color: "gray",
    textDecorationLine: "line-through",
  },
});
