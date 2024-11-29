import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import {styles} from './ActionButtonsStyle'


interface ActionButtonsProps {
  onProfilePress: () => void;
  onChatPress: () => void;
}

export default function ActionButtons({ onProfilePress, onChatPress }: ActionButtonsProps) {
  return (
    <View style={styles.container}>
      <Button title="Perfil" onPress={onProfilePress} />
      <Button title="Conversa" onPress={onChatPress} />
    </View>
  );
}