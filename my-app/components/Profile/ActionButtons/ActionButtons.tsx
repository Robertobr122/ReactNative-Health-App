import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {styles} from './ActionButtonsStyle'

interface ActionButtonsProps {
  onProfilePress: () => void;
  onChatPress: () => void;
}

export default function ActionButtons({ onProfilePress, onChatPress }: ActionButtonsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onProfilePress}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onChatPress}>
        <Text style={styles.buttonText}>Conversa</Text>
      </TouchableOpacity>
    </View>
  );
}