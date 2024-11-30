import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './ProfileScrrenStyle';

export default function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text style={styles.text}>Tela de Perfil - Edite Aqui</Text>
    </View>
  );
}