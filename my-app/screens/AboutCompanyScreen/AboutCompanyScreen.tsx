import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutCompanyScreen() {
  return (
    <View style={styles.container}>
      {/* Título da Tela */}
      <Text style={styles.title}>Sobre a Empresa</Text>

      {/* Conteúdo Descritivo */}
      <ScrollView style={styles.content}>
        <Text style={styles.paragraph}>
          Bem-vindo à nossa empresa! Somos dedicados a oferecer serviços e produtos que melhoram a qualidade de vida dos nossos clientes.
        </Text>
        <Text style={styles.paragraph}>
          Desde a nossa fundação, buscamos inovação e excelência em tudo o que fazemos, valorizando a sustentabilidade e o impacto positivo na sociedade.
        </Text>
        <Text style={styles.paragraph}>
          Nossa missão é ser referência em nosso setor, combinando tecnologia, talento humano e responsabilidade social para entregar valor e satisfação a todos os stakeholders.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Cor de fundo branca
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Cor do texto
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555', // Cor do texto dos parágrafos
    marginBottom: 15,
  },
});
