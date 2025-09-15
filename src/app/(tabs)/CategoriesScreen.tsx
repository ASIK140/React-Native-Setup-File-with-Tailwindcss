// screens/HomeScreen.tsx
import CategoriesCard from "@/src/components/CategoriesCard";
import { ScrollView, Text, View } from "react-native";
export default function CategoriesScreen() {
  const Overviews = [
    {
      title: "Total Task",
      value: 24,
    },
    {
      title: "Completed",
      value: 8,
    },
    {
      title: "categories",
      value: 6,
    },
  ];
  const Categories = [
    {
      title: "Daily",
      task: "2",
      color: "#4DB6AC",
      iconName: "calendar-day",
    },
    {
      title: "Meeting",
      task: "4",
      color: "#FF8A65",
      iconName: "users",
    },
    {
      title: "Call & Mail",
      task: "3",
      color: "#6A64FF",
      iconName: "phone",
    },
    {
      title: "Projects",
      task: "6",
      color: "#9C27B0",
      iconName: "diagram-project",
    },
    {
      title: "Important",
      task: "3",
      color: "#FF5252",
      iconName: "circle-exclamation",
    },
    {
      title: "Study",
      task: "4",
      color: "#FFC107",
      iconName: "book",
    },
  ];
  return (
    <ScrollView>
      {/* Overview Section */}
      <View className="px-5 pb-40">
        <View className="p-5 bg-white shadow-2xl rounded-2xl mt-2">
          <Text className="text-xl font-semibold">Overview</Text>
          <View className="flex flex-row justify-between mt-5">
            {Overviews.map((overview, index) => (
              <View key={index}>
                <Text className="text-2xl font-bold text-center">
                  {overview.value}
                </Text>
                <Text className="text-gray-500 mt-1">{overview.title}</Text>
              </View>
            ))}
          </View>
        </View>
        {/* Category Section */}
        <View className="mt-8 flex flex-row flex-wrap justify-between gap-4">
          {Categories.map((category, index) => (
            <CategoriesCard
              key={index}
              title={category.title}
              iconName={category.iconName}
              tasks={category.task}
              iconColor={category.color}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
