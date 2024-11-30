import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {styles} from './ProfileInfoStyle'

interface ProfileNameSubtitleProps {
  name: string;
  subtitle: string;
}

export default function ProfileNameSubtitle({ name, subtitle }: ProfileNameSubtitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
