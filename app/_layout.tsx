import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" />
    </>
  );
}

export default RootLayout;
