import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextType = {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AUTH_KEY = "auth_status";

async function checkAuthStatus(): Promise<boolean> {
  try {
    const authStatus = await AsyncStorage.getItem(AUTH_KEY);
    return authStatus === "true";
  } catch (error) {
    console.error("Error checking auth status:", error);
    return false;
  }
}

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status on mount
    checkAuthStatus()
      .then((status) => {
        setIsAuthenticated(status);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Your authentication logic here
      // For demo, we'll just set authenticated to true
      await AsyncStorage.setItem(AUTH_KEY, "true");
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Sign in error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await AsyncStorage.setItem(AUTH_KEY, "false");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
