import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ButtonStyle';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function BottomMenu() {
  const navigation = useNavigation<any>(); 

  return (
    <View style={styles.bottomMenu}>
      {/* Botão de hambúrguer */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Ionicons name="menu" size={40} color="white" />
      </TouchableOpacity>

      {/* Botão de conversas */}
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="chatbubbles" size={40} color="white" />
      </TouchableOpacity>

       {/* Botão de perfil */}
       <TouchableOpacity
        style={styles.menuButton}
        onPress={() => {
          console.log('Navegando para ProfileScreen...');
          navigation.navigate('ProfileStack'); // Navega para a pilha de perfil
        }}
      >
        <Ionicons name="person" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}
