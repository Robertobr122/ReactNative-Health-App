import React from 'react';
import { View, Text, Animated,Image } from 'react-native';
import styles from './HeaderStyle';
import logo from '../../assets/logo.png';

type HeaderProps = {
  isVisible: boolean; // Controle de visibilidade
};

export default function Header({ isVisible }: HeaderProps) {
  return (
    <Animated.View style={[styles.header, { opacity: isVisible ? 1 : 0 }]}>
        <Image source={logo} style={styles.image}></Image>
    </Animated.View>
  );
}
