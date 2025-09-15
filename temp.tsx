import React, { useState } from "react";
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const TABS = ["All", "Today", "Important", "Completed"];

export default function RemindersNav() {
  const [activeTab, setActiveTab] = useState("Today");

  // To store the layout (x, width) of each tab
  const [tabLayouts, setTabLayouts] = useState<
    Record<string, { x: number; width: number }>
  >({});

  // Shared values for the animated pill's position and width
  const animatedX = useSharedValue(0);
  const animatedWidth = useSharedValue(0);

  // Function to handle tab press
  const handlePress = (tabName: string) => {
    setActiveTab(tabName);
    const layout = tabLayouts[tabName];
    if (layout) {
      animatedX.value = withSpring(layout.x, { damping: 15 });
      animatedWidth.value = withSpring(layout.width, { damping: 15 });
    }
  };

  // Function to store the layout of each tab button
  const onTabLayout = (event: LayoutChangeEvent, tabName: string) => {
    const { x, width } = event.nativeEvent.layout;
    const newLayouts = { ...tabLayouts, [tabName]: { x, width } };
    setTabLayouts(newLayouts);

    // Set initial position of the pill on the first layout measurement
    if (tabName === activeTab) {
      animatedX.value = x;
      animatedWidth.value = width;
    }
  };

  // Animated style for the moving pill
  const animatedPillStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: animatedX.value }],
      width: animatedWidth.value,
    };
  });

  return (
    <View style={styles.container}>
      {/* Animated Pill Background */}
      <Animated.View style={[styles.activePill, animatedPillStyle]} />

      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.tabButton}
            onPress={() => handlePress(tab)}
            onLayout={(event) => onTabLayout(event, tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6", // A light gray background
    borderRadius: 999,
    padding: 5,
    margin: 20,
    // iOS Shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    // Android Shadow
    elevation: 5,
  },
  activePill: {
    position: "absolute",
    top: 5,
    left: 0,
    backgroundColor: "#6366F1", // The purple color
    borderRadius: 999,
    height: "100%",
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tabButton: {
    flex: 1, // Each button takes equal space
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    zIndex: 1, // Ensure text is above the animated pill
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
