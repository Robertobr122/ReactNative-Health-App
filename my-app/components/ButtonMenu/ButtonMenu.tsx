import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones
import styles from './ButtonStyle'; // Importando estilos

// Componente BottomMenu
export default function BottomMenu() {
  return (
    <View style={styles.bottomMenu}>
      {/* Botão de sanduíche */}
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="menu" size={40} color="white" />
      </TouchableOpacity>

      {/* Botão de conversas */}
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="chatbubbles" size={40} color="white" />
      </TouchableOpacity>

      {/* Botão de perfil */}
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="person" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}

