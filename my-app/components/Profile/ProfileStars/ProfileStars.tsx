import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {styles} from './ProfileStarsStyle'

interface RatingProps {
  stars: number; // Avaliação de 1 a 5
}

export default function Rating({ stars }: RatingProps) {
  const totalStars = 5;

  return (
    <View style={styles.container}>
      {Array.from({ length: totalStars }, (_, index) => (
        <FontAwesome
          key={index}
          name="star"
          size={20}
          color={index < stars ? 'gold' : 'gray'}
        />
      ))}
    </View>
  );
}