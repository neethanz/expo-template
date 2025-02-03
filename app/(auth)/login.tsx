import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import useAuthStore from "@/hooks/useAuthStore";

export default function login() {
  const { setAuth } = useAuthStore();
  return (
    <View>
      <Text>login</Text>
      <Button title="Signup" onPress={() => setAuth(true)} />
    </View>
  );
}

const styles = StyleSheet.create({});
