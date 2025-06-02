import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { userStore$ } from "~/stores/userStore";

export default function SettingsScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <Button onPress={() => userStore$.reset()} variant="destructive">
        <Text>Logout</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  triggerStyle: {
    height: 40,
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  triggerText: {
    fontSize: 16,
  },
});
