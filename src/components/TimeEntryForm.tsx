import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
  SelectGroup,
} from "~/components/ui/select";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { projectStore$ } from "~/stores/projectStore";
import { Memo, observer, use$, useObservable } from "@legendapp/state/react";
import { observable } from "@legendapp/state";
import { activityStore$ } from "~/stores/activityStore";
import { timeEntryStore$ } from "~/stores/timeEntryStore";

interface Props {
  onClose: () => void;
}
const TimeEntryForm = ({ onClose }: Props) => {
  const insets = useSafeAreaInsets();
  const projects = use$(projectStore$.projects);
  const activities = use$(activityStore$.activities);
  // const timeEntries = use$(timeEntryStore$.)

  const formState$ = useObservable({
    projectId: "",
    activityId: "",
  });

  const filteredActivities$ = observable(() =>
    activityStore$.activities
      .get()
      .filter((activity) => activity.project_key === formState$.projectId.get())
  );

  const contentInsets = {
    top: insets.top,
    bottom: insets.bottom,
    left: 12,
    right: 12,
  };

  function handleSubmit() {
    timeEntryStore$.addTimeEntry({
      activity_id: formState$.activityId.get(),
      hours: 0,
      note: "blah",
      project_id: formState$.projectId.get(),
      // TODO: Get later
      redmine_key: "1234",
      start_time: new Date(),
    });
    onClose();
  }

  return (
    <View className="bg-gray-100 w-full rounded-2xl p-6">
      <Text>TimeEntryForm</Text>
      <Select
        onValueChange={(option) => {
          option && formState$.projectId.set(option.value);
          option && formState$.activityId.set("");
        }}
      >
        <SelectTrigger className="w-[250px]">
          <SelectValue
            className="text-foreground text-sm native:text-lg"
            placeholder="Select a Project"
          />
        </SelectTrigger>
        <SelectContent insets={contentInsets} className="w-[250px]">
          <SelectGroup>
            {projects.map((project) => (
              <SelectItem label={project.name} value={project.id}>
                {project.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        disabled={formState$.projectId.get().length > 0}
        value={{ value: formState$.activityId.get(), label: "" }}
        onValueChange={(option) =>
          option && formState$.activityId.set(option.value)
        }
      >
        <SelectTrigger className="w-[250px]">
          <SelectValue
            className="text-foreground text-sm native:text-lg"
            placeholder="Select a Activity Project"
          />
        </SelectTrigger>
        <SelectContent insets={contentInsets} className="w-[250px]">
          <SelectGroup>
            {filteredActivities$.map((activity) => (
              <Memo>
                <SelectItem
                  label={activity.name.get()}
                  value={activity.id.get()}
                >
                  {activity.name.get()}
                </SelectItem>
              </Memo>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button variant="ghost" onPress={onClose}>
        <Text>Cancel</Text>
      </Button>
      <Button onPress={handleSubmit}>
        <Text>Start Timer</Text>
      </Button>
    </View>
  );
};

export default observer(TimeEntryForm);
