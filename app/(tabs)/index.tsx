import { View, Text, StyleSheet, Button } from 'react-native';
import { Memo, observer, use$, useObservable } from '@legendapp/state/react';
import { todoStore$ } from '../../stores/todoStore';
import { CustomButton } from '~/components/CustomButton';

// TODO: Start bringing the component over from Zulu
export default function HomeScreen() {
  const total = use$(todoStore$.total);

  return (
    <View style={styles.container}>
      <Text>
        Total: <Memo>{total}</Memo>
      </Text>
      <Button title="Add Todo" onPress={() => todoStore$.addTodo()} />
      <Button title="Clear" onPress={() => todoStore$.todos.set([])} />
      <Text className="text-primary-500">Time Entries</Text>
      <View className="w-[30px] h-[30px] bg-secondary-300"></View>
      <CustomButton title="Custom Button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
