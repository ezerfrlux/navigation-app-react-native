import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

  const navigation = useNavigation()


  const onToggleDrawer  = () => {

    navigation.dispatch(DrawerActions.toggleDrawer)

  }

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>
        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Profile
        </CustomButton>
        <CustomButton
          className="mb-10"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Settings
        </CustomButton>
        <CustomButton
          variant="text-only"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>
        <CustomButton onPress={onToggleDrawer}>
          Abrir Menu
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}
