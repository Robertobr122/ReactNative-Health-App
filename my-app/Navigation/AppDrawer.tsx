import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen/MainScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ConfigurationsScreen from '../ConfigurationsScreen/ConfigurationsScreen';
import AboutCompanyScreen from '../screens/AboutCompanyScreen/AboutCompanyScreen';
import PoliciesScreen from '../screens/PoliciesScreen/PoliciesScreen';
import LoginScreen from '../screens/LogginScreen/LogginScreen'; // Tela de login

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Pilha de navegação para telas específicas (ex.: Perfil)
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: 'Perfil',
          headerStyle: { elevation: 0, shadowOpacity: 0 },
        }}
      />
    </Stack.Navigator>
  );
}

// Menu de navegação com gaveta
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false, // Remove o cabeçalho padrão
      }}
    >
      <Drawer.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'Página Principal',
          drawerLabelStyle: {
            fontWeight: 'bold',
            color: '#008970',
          },
        }}
      />
      <Drawer.Screen
        name="ConfigurationsScreen"
        component={ConfigurationsScreen}
        options={{
          title: 'Configurações',
          drawerLabelStyle: {
            color: '#008970',
          },
        }}
      />
      <Drawer.Screen
        name="AboutCompanyScreen"
        component={AboutCompanyScreen}
        options={{
          title: 'Sobre a Empresa',
          drawerLabelStyle: {
            color: '#008970',
          },
        }}
      />
      <Drawer.Screen
        name="PoliciesScreen"
        component={PoliciesScreen}
        options={{
          title: 'Normas e Políticas',
          drawerLabelStyle: {
            color: '#008970',
          },
        }}
      />
      <Drawer.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          title: 'Perfil',
          drawerLabelStyle: {
            color: '#008970',
          },
        }}
      />
    </Drawer.Navigator>
  );
}

// Navegação principal (Login + DrawerNavigator)
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tela de Login é inicial */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        {/* Menu principal após login */}
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
