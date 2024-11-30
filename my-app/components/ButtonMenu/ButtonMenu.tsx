import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './ButtonStyle';

interface BottomMenuProps {
  onProfilePress: () => void;
}

export default function BottomMenu({ onProfilePress }: BottomMenuProps) {
  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="menu" size={40} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton}>
        <Ionicons name="chatbubbles" size={40} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuButton} onPress={onProfilePress}>
        <Ionicons name="person" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}
