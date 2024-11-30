import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from '../screens/MainScreen/MainScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import ConfigurationsScreen from '../ConfigurationsScreen/ConfigurationsScreen';
import AboutCompanyScreen from '../screens/AboutCompanyScreen/AboutCompanyScreen';
import PoliciesScreen from '../screens/PoliciesScreen/PoliciesScreen';

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
          options={{ title: 'Página Principal' }}
        />
        <Drawer.Screen
          name="ConfigurationsScreen"
          component={ConfigurationsScreen}
          options={{ title: 'Configurações' }}
        />
        <Drawer.Screen
          name="AboutCompanyScreen"
          component={AboutCompanyScreen}
          options={{ title: 'Sobre a Empresa' }}
        />
        <Drawer.Screen
          name="PoliciesScreen"
          component={PoliciesScreen}
          options={{ title: 'Normas e Políticas' }}
        />
        <Drawer.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{ title: 'Perfil' }}
        />
      </Drawer.Navigator>
    );
  }
  

// Componente principal de navegação
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
