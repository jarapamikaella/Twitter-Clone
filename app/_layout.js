import { Stack } from "expo-router";

export default Layout = () => {
  return <Stack screenOptions={() => ({
    headerShown: false
  })} />;
}