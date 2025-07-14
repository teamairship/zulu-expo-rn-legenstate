import { View } from "react-native";
import { Card } from "./ui/card";
import { Text } from "./ui/text";
import { timeEntryStore$ } from "~/stores/timeEntryStore";
import { observer, use$ } from "@legendapp/state/react";
import { activityStore$ } from "~/stores/activityStore";
import { useState, useEffect } from "react";

const TimeEntryList = () => {
  const timeEntries = use$(timeEntryStore$.timeEntries);
  const activities = use$(activityStore$.activities);

  // Local state to force re-render every second
  const [tick, setTick] = useState(0);

  // Set up an interval to update the UI every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTick((prev) => prev + 1); // Trigger re-render
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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
              {(() => {
                const now = new Date();
                const startTime = new Date(entry.start_time);
                const diff = now.getTime() - startTime.getTime();
                const hours = Math.floor(diff / (60 * 60 * 1000));
                const minutes = Math.floor(
                  (diff % (60 * 60 * 1000)) / (60 * 1000)
                );
                const seconds = Math.floor((diff % (60 * 1000)) / 1000);
                return `${hours.toString().padStart(2, "0")}:${minutes
                  .toString()
                  .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
              })()}
            </Text>
          </Card>
        ))
      )}
    </View>
  );
};

export default observer(TimeEntryList);
