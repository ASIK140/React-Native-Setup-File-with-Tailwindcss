import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const TABS = ["All", "Today", "Important", "Completed"];
export default function RemindersNav() {
  const [activeTab, setActiveTab] = useState("All");

  const handlePress = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <View style={styles.container} className="shadow-xl">
      {TABS.map((tab, index) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tabButton, activeTab === tab && styles.activeButton]}
          onPress={() => handlePress(tab)}
          activeOpacity={1}
        >
          <Text
            style={[styles.tabText, activeTab === tab && styles.activeTabText]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff", // A light gray background
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  tabButton: {
    flex: 1, // Each button takes equal space
    paddingVertical: 10,
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    zIndex: 1, // Ensure text is above the animated pill
  },
  activeButton: {
    backgroundColor: "#5E58EB",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#6B7280", // Gray color for inactive text
  },
  activeTabText: {
    color: "#FFFFFF", // White color for active text
  },
});
