import { View, Text, StyleSheet, Button } from "react-native";
import { Memo, observer, use$, useObservable } from "@legendapp/state/react";

import { CustomButton } from "~/components/CustomButton";
import { InputText } from "~/components/InputText";
import { MyButton } from "~/components/Button";
import { useForm } from "@tanstack/react-form";
import { userStore$ } from "~/stores/userStore";

// TODO: Start bringing the component over from Zulu
export default function HomeScreen() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={() => userStore$.reset()} />
      <Text className="text-primary-500">Time Entries</Text>
      <View className="w-[30px] h-[30px] bg-secondary-300"></View>
      <CustomButton title="Custom Button" />
      <MyButton>Primary</MyButton>
      <MyButton variant="destructive">Destructive</MyButton>
      <MyButton variant="outline">outline</MyButton>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <form.Field name="firstName">
          {(field) => (
            <>
              <Text>First Name</Text>
              <InputText
                value={field.state.value}
                onChangeText={field.handleChange}
                name={field.name}
              />
              {field.state.meta.errors ? (
                <Text>{field.state.meta.errors.join(", ")}</Text>
              ) : null}
            </>
          )}
        </form.Field>
        <form.Field name="lastName">
          {(field) => (
            <>
              <Text>Last Name</Text>
              <InputText
                value={field.state.value}
                onChangeText={field.handleChange}
                name={field.name}
              />
              {field.state.meta.errors ? (
                <Text>{field.state.meta.errors.join(", ")}</Text>
              ) : null}
            </>
          )}
        </form.Field>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button
              disabled={!canSubmit}
              onPress={form.handleSubmit}
              title={isSubmitting ? "..." : "Submit"}
            />
          )}
        />
      </form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
