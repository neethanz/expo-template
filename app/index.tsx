import { Text, View } from "react-native";
import "react-native-url-polyfill/auto";
import { Account, ID } from "react-native-appwrite";
import client from "../appwrite/config";
// Init your React Native SDK
// Your application ID or bundle ID.
const account = new Account(client);

export default function Index() {
  const createUser = async () => {
    const user = await account.create(
      ID.unique(),
      "test@test.com",
      "password",
      "test"
    );
    console.log(user);
  };

  async function login(email: string, password: string) {
    console.log("first");

    try {
      const res = await account.createEmailPasswordSession(email, password);
      console.log(res, "res");
    } catch (error) {
      console.log(error, "error");
    }
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text onPress={createUser}>Edit app/index.tsx to edit this screen.</Text>
      <Text onPress={() => login("test@test.com", "password")}>Login</Text>
    </View>
  );
}
