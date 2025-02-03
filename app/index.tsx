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
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
