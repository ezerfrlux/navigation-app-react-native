import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <Link href="/products" asChild>
          <CustomButton  className="mb-10" color="primary">Productos</CustomButton>
        </Link>
        <CustomButton className="mb-10" color="primary" onPress={() => router.push("/products")}>
          Productos
        </CustomButton>
        <CustomButton  variant="text-only" onPress={() => router.push("/products")}>
          Productos
        </CustomButton>
        {/* <Text className="text-3xl font-work-medium text-tertiary">EL HUESOOOO!!!</Text>

        <Link className="mt-5" href="/products">Products</Link>
        <Link className="mt-5" href="/profile">Profile</Link>
        <Link className="mt-5" href="/settings">Settings</Link> */}
      </View>
    </SafeAreaView>
  );
}
