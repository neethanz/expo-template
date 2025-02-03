import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import useAuthStore from "@/hooks/useAuthStore";

export default function details() {
  const { setAuth } = useAuthStore();
  return (
    <View>
      <Text>details</Text>

      <Button title="Logout" onPress={() => setAuth(false)} />
    </View>
  );
}

const styles = StyleSheet.create({});
