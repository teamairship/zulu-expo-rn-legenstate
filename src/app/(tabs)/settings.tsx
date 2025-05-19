import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MyButton } from "~/components/Button";
import { Select } from "~/components/Select";
import { SelectOption } from "~/components/Select/SelectOption";

export default function SettingsScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      {/* <Select
        visible={visible}
        handleOpen={() => setVisible(true)}
        handleClose={() => setVisible(false)}
        title="Project"
        trigger={
          // <MyButton>Hello</MyButton>
          <View style={styles.triggerStyle}>
            <Text>Actions</Text>
          </View>
        }
      >
        <SelectOption
          onSelect={() => {
            setVisible(false);
          }}
        >
          <Text>View Details</Text>
        </SelectOption>
        <SelectOption
          onSelect={() => {
            setVisible(false);
          }}
        >
          <Text>Delete</Text>
        </SelectOption>
      </Select> */}
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
