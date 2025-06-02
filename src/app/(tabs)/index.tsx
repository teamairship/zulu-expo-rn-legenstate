import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { TimeEntryForm } from "~/components/TimeEntryForm";
import { StyleSheet, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Card } from "~/components/ui/card";
// TODO: Start bringing the component over from Zulu
export default function HomeScreen() {
  const [showTimeEntryForm, setShowTimeEntryForm] = useState(false);

  return (
    <View style={styles.container}>
      <View className="flex flex-row justify-between w-full px-4">
        {showTimeEntryForm ? (
          <TimeEntryForm onClose={() => setShowTimeEntryForm(false)} />
        ) : (
          <View className="flex flex-row gap-4 items-center justify-center w-full">
            <Button
              onPress={() => {
                setShowTimeEntryForm((prev) => !prev);
              }}
            >
              <Text>
                <FontAwesome size={14} name="plus" /> Add single entry
              </Text>
            </Button>
            <Button variant="outline" onPress={() => {}}>
              <Text>
                <FontAwesome size={14} name="plus" /> Add split entry
              </Text>
            </Button>
          </View>
        )}
      </View>
      <Text className="text-primary-500">Time Entries</Text>
      <View>
        <Card className="p-2">
          <Text>Total Hours: 40</Text>
          <Text>Daily: 8</Text>
          <Text>Weekly: 40</Text>
        </Card>
        <Button onPress={() => {}}>
          <Text>
            <FontAwesome size={14} name="plus" /> Add Weekly Defaults
          </Text>
        </Button>
      </View>
      <Button variant="ghost" onPress={() => {}}>
        <Text>
          Submit day <FontAwesome size={14} name="arrow-right" />
        </Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
});
