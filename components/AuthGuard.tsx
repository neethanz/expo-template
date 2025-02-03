import { Redirect, useSegments } from "expo-router";
import React from "react";
import useAuthStore from "@/hooks/useAuthStore";

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const segments = useSegments();
  const inAuthGroup = segments[0] === "(auth)";

  if (!isAuthenticated  && !inAuthGroup) {
    return <Redirect href="/login" />;
  }

  if (isAuthenticated && inAuthGroup) {
    return <Redirect href="/" />;
  }

  return <>{children}</>;
}
