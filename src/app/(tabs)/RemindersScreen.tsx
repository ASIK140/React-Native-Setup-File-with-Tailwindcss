import ReminderList from "@/src/components/ReminderList";
import RemindersNav from "@/src/components/RemindersNav";
import React from "react";
import { View } from "react-native";
interface Date {
  time: string;
  day: string;
}
const Reminder = [
  {
    title: "Team Meeting",
    date: {
      time: "9:00 AM",
      day: "Today",
    },
    complete: false,
  },
  {
    title: "Project Deadline",
    date: {
      time: "11:30 PM",
      day: "Today",
    },
    completed: false,
  },
  {
    title: "Client Call",
    date: {
      time: "10:00 AM",
      day: "Tomorrow",
    },
    completed: false,
  },
  {
    title: "Review Design Doc",
    date: {
      time: "10:00 AM",
      day: "10 oct",
    },
    completed: true,
  },
];
const RemindersScreen = () => {
  return (
    <View className="px-5">
      <RemindersNav />
      <View>
        {Reminder.map((rem, index) => (
          <ReminderList
            key={index}
            title={rem.title}
            date={rem.date}
            completed={rem.completed}
          />
        ))}
      </View>
    </View>
  );
};

export default RemindersScreen;
