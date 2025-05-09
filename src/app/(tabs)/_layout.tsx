import FontAwesome from '@expo/vector-icons/FontAwesome';
import { use$ } from '@legendapp/state/react';
import { Tabs } from 'expo-router';
import { userStore$ } from '~/src/stores/userStore';

export default function TabLayout() {
  // Check if user is logged in
  // const isLoggedIn = use$(userStore$.isLoggedIn);
  // No? Render the auth form
  // if (!isLoggedIn) {

  // }
  // Yes?  render tabs
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          // @ts-ignore
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="split-time"
        options={{
          title: 'Split Time',
          // @ts-ignore
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="pie-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          // @ts-ignore
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
