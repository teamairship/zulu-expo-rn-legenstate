import { use$ } from '@legendapp/state/react';
import { Stack } from 'expo-router';
import '~/global.css';
import { userStore$ } from '../stores/userStore';

export default function RootLayout() {
  const isLoggedIn = use$(userStore$.isLoggedIn);

  return (
    <Stack>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
    </Stack>
  );
}
