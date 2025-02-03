import { Redirect, Stack, useSegments } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import useAuthStore from "@/hooks/useAuthStore";

export default function layout() {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }
  return <Stack />;
}

const styles = StyleSheet.create({});
