import { StatusBar } from 'expo-status-bar';
import { Button, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/app/login/LoginPage.tsx';
import RegisterPage from './src/app/register/RegisterPage.tsx';

export default function App() {
  return (
   <LoginPage />
  );
}