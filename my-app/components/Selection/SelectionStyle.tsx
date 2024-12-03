import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 16,
    width: 280,
  },

  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Mantém itens à esquerda
    marginBottom: 12,
    padding: 8,
    borderRadius: 8,
  },

  optionConteiner2: {
    width: 300,
    alignItems: 'stretch',
  },

  optionText: {
    fontSize: 15,
    color: '#008970',
    textAlign: 'left', // Alinha o texto à esquerda
    flex: 1, // Faz o texto ocupar o espaço disponível
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#008970',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12, // Ajusta o espaçamento entre o checkbox e o texto
  },
});
