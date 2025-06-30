import { use$ } from "@legendapp/state/react";
import { View, StyleSheet } from "react-native";
import { userStore$ } from "../stores/userStore";
import { InputText } from "../components/InputText";
import { useForm } from "@tanstack/react-form";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

export default function LoginScreen() {
  const setUser = use$(userStore$.setUser);
  const form = useForm({
    defaultValues: {
      name: "",
      redmineKey: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
      setUser(value);
    },
  });

  return (
    <View style={styles.container}>
      <Text className="font-bold text-2xl">Login Screen</Text>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          void form.handleSubmit();
        }}
      >
        <form.Field name="name">
          {(field) => (
            <>
              <Text>Name</Text>
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
        <form.Field name="redmineKey">
          {(field) => (
            <>
              <Text>Redmine Key</Text>
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
            <Button disabled={!canSubmit} onPress={form.handleSubmit}>
              <Text>{isSubmitting ? "..." : "Submit"}</Text>
            </Button>
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
