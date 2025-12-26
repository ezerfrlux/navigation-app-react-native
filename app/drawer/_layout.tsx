import { Ionicons } from "@expo/vector-icons";
import Drawer from "expo-router/drawer";
import React from "react";
import { Text } from "react-native";
export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={() => <Text>Hola mudo</Text>}

      screenOptions={{
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "User",
          title: "User",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Schedule",
          title: "Schedule",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
