import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PoliciesScreen() {
  return (
    <View style={styles.container}>
      {/* Título da Tela */}
      <Text style={styles.title}>Normas e Políticas</Text>

      {/* Conteúdo das Políticas */}
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Política de Privacidade</Text>
        <Text style={styles.paragraph}>
          Nós valorizamos sua privacidade e nos comprometemos a proteger seus dados pessoais. Todas as informações coletadas são utilizadas de forma segura e responsável.
        </Text>

        <Text style={styles.sectionTitle}>Termos de Uso</Text>
        <Text style={styles.paragraph}>
          O uso desta plataforma implica na aceitação dos nossos termos e condições. Consulte as regras para uso adequado e conduta esperada.
        </Text>

        <Text style={styles.sectionTitle}>Direitos do Usuário</Text>
        <Text style={styles.paragraph}>
          Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Entre em contato conosco para exercer esses direitos.
        </Text>

        <Text style={styles.sectionTitle}>Política de Devoluções</Text>
        <Text style={styles.paragraph}>
          Caso você tenha alguma insatisfação com nossos serviços ou produtos, consulte nossas diretrizes para devoluções e reembolsos.
        </Text>

        <Text style={styles.sectionTitle}>Alterações nas Políticas</Text>
        <Text style={styles.paragraph}>
          Reservamo-nos o direito de atualizar estas políticas periodicamente. Recomendamos que você consulte esta seção regularmente.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginTop: 15,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 15,
  },
});
