import useGetUserData from "@/hooks/useGetUserData";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function WeatherInfo() {
  const { data, isLoading, setUserId, userId } = useGetUserData();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>user name: {data?.name}</Text>
      <Text style={styles.title}>user email: {data?.email}</Text>
      <Button title="get data" onPress={() => setUserId(userId + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
