import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './screens/MainScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Tela principal */}
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{ headerShown: false }} // Oculta o cabeçalho
        />

        {/* Tela de perfil */}
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            headerTitle: '', // Remove o texto do título
            headerLeft: () => null, // Esconde o botão "voltar", caso necessário
            headerStyle: { elevation: 0, shadowOpacity: 0 }, // Remove sombra no Android
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
