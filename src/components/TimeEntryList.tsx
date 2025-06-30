import { View } from "react-native";
import { Card } from "./ui/card";
import { Text } from "./ui/text";
import { timeEntryStore$ } from "~/stores/timeEntryStore";
import { observer, use$ } from "@legendapp/state/react";
import { activityStore$ } from "~/stores/activityStore";

const TimeEntryList = () => {
  const timeEntries = use$(timeEntryStore$.timeEntries);
  const activities = use$(activityStore$.activities);

  return (
    <View>
      <Text className="text-primary-500">Time Entries</Text>
      {timeEntries.length === 0 ? (
        <Text className="text-gray-500">No time entries found.</Text>
      ) : (
        timeEntries.map((entry) => (
          <Card key={entry.id}>
            <Text>
              {activities.find((a) => a.id === entry.activity_id)?.name ||
                entry.activity_id}
            </Text>
            <Text>
              {Math.round(
                (Date.now() - new Date(entry.start_time).getTime()) / 1000
              ).toString()}{" "}
              seconds
            </Text>
          </Card>
        ))
      )}
    </View>
  );
};

export default observer(TimeEntryList);
