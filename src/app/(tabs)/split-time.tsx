import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Split Time</Text>
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
