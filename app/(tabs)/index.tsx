import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth } from "../context/auth";
import useAuthStore from "@/hooks/useStore";

export default function Home() {
  const signOut = () => {
    useAuthStore.setState({ isAuthenticated: false });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home!</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
