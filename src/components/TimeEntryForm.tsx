import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { View } from "react-native";

interface Props {
  onClose: () => void;
}
export const TimeEntryForm = ({ onClose }: Props) => {
  return (
    <View className="bg-gray-100 w-full rounded-2xl p-6">
      <Text>TimeEntryForm</Text>
      <Button variant="ghost" onPress={onClose}>
        <Text>Cancel</Text>
      </Button>
      <Button onPress={onClose}>
        <Text>Start Timer</Text>
      </Button>
    </View>
  );
};
