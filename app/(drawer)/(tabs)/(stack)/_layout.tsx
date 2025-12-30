import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";
export default function StackLayout() {
  const navigation = useNavigation();
  const router = useRouter()
  const onHeaderLeftClick = (canGoBack: boolean = false) => {
    if (canGoBack) {
      router.back()
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "menu-outline"}
            size={20}
            className="mr-5"
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Products",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings",
        }}
      />
    </Stack>
  );
}
