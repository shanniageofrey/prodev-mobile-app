import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
      {/* Notice: headerShown removed for Profile */}
      <Stack.Screen name="(home)/profile" options={{ headerShown: false }} />
    </Stack>
  );
}
