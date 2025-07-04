import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Time entries",
          // @ts-ignore
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="clock-o" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="split-time"
        options={{
          title: "Split time",
          // @ts-ignore
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="pie-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          // @ts-ignore
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
