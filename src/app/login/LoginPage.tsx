import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Linking, Pressable, StyleSheet, Text, TextInput, TextInputBase, TextInputComponent, TouchableHighlight, TouchableOpacity, View } from 'react-native';


export default function LoginPage() {
  
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <View className="flex-1 items-center justify-center bg-white gap-y-2 bg-zinc-50">
      <Text className='font-bold text-5xl text-green-900 mb-4'>Petty!</Text>
      <View className='w-full items-center flex flex-col gap-2'>
        <Text className='w-5/6 font-bold text-lg'>E-mail</Text>
        <TextInput placeholder='-' className='bg-white border border-green-500 w-5/6 p-5 border rounded-md' onChangeText={setEmailValue} value={emailValue} inputMode='email'/>
      </View>
      <View className='mb-2 w-full items-center flex flex-col gap-2'>
        <Text className='w-5/6 font-bold text-lg'>Senha</Text>
        <TextInput placeholder='-' className='bg-white border border-green-500 w-5/6 p-5 border rounded-md' secureTextEntry={true} onChangeText={setPasswordValue} inputMode='text' value={passwordValue}/>
      </View>
      <Pressable className='mb-2 bg-green-950 p-5 w-5/6 items-center rounded-xl transform hover:scale-110 active:bg-emerald-800' onPress={() => alert('test')}>
        <Text className='font-bold text-lg text-white'>Entrar</Text>
      </Pressable>
      <View className='flex flex-row gap-x-1'>
        <Text className=''>Ainda não possui uma conta?</Text>
        <Text className='text-emerald-500' onPress={() => alert('redirect to register')}>Cadastre-se!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}