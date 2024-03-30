import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function LoginPage() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Login</Text>
      <StatusBar style="auto" />
    </View>
  );
}