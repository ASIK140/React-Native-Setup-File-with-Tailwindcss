import CategoryCard from "@/src/components/CategoryCard";
import UpcomingList from "@/src/components/UpcomingList";
import { FontAwesome6 } from "@expo/vector-icons";

import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";
interface Data {
  title: string;
  time: string;
}
const data: Data = {
  title: "Team Meeting",
  time: "9:00 AM Today",
};
export default function App() {
  return (
    <ScrollView>
      <View className="flex-1 bg-[#F5F7FA] mb-32">
        <View className="px-5">
          <View className="p-5 text-white rounded-2xl bg-blue-500">
            <Text className="text-2xl text-white font-semibold">
              Good morning, Asik
            </Text>
            <Text className="text-white  text-base mt-2">
              You have 3 tasks scheduled for today.
            </Text>
            <Text className="text-white  text-base">Stay productive!</Text>
            <View className="flex flex-row items-center mt-2">
              <FontAwesome6 name="calendar" color="white" />
              <Text className="text-white ml-1">Monday, September 8</Text>
            </View>
          </View>
          {/* Progress State */}
          <View className="p-5 mt-5 bg-white rounded-2xl shadow-xl">
            <View>
              <Text className="text-2xl font-semibold">
                Today&apos;s Progress
              </Text>
            </View>
            <View className="mt-5">
              <Text className="text-lg text-gray-500 mb-5">
                Track your daily achievements
              </Text>
              <View className="flex flex-row justify-between">
                <View>
                  <Text className="text-center text-3xl font-bold">14</Text>
                  <Text>Total Task</Text>
                </View>
                <View>
                  <Text className="text-center text-3xl font-bold">5</Text>
                  <Text>Completed</Text>
                </View>
                <View>
                  <Text className="text-center text-3xl font-bold">75%</Text>
                  <Text>Progress</Text>
                </View>
              </View>
            </View>
          </View>
          {/* Upcoming Task Section */}
          <View className="mt-7">
            <View className="flex flex-row justify-between items-center">
              <Text className="text-2xl font-bold">Upcoming Task</Text>
              <Link href={"/RemindersScreen"} className="text-xl text-blue-500">
                View all
              </Link>
            </View>
            <View>
              <UpcomingList icon_name="users" data={data} color={"#FF8A65"} />
              <UpcomingList
                icon_name="circle-exclamation"
                data={data}
                color={"#FF5252"}
              />
            </View>
          </View>
          <View className="mt-7">
            <View className="flex flex-row justify-between items-center">
              <Text className="text-2xl font-bold">Task Categories</Text>
              <Link
                href={"/CategoriesScreen"}
                className="text-xl text-blue-500"
              >
                View all
              </Link>
            </View>
            <View className="flex flex-row flex-wrap gap-4 justify-between mt-5">
              <CategoryCard
                iconName="users"
                title="Meeting"
                tasks="2"
                iconColor="#FF8A65"
              />
              <CategoryCard
                iconName="phone"
                title="Call & Mail"
                tasks="3"
                iconColor="#6A64FF"
              />
              <CategoryCard
                iconName="list-check"
                title="Projects"
                tasks="6"
                iconColor="#4DB6AC"
              />
              <CategoryCard
                iconName="circle-exclamation"
                title="Important"
                tasks="4"
                iconColor="#FF5252"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
