import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bottomMenu: {
    flexDirection: 'row', // Itens organizados na horizontal
    justifyContent: 'space-around', // Espaço igual entre os itens
    alignItems: 'center', // Centraliza verticalmente
    backgroundColor: '#008970', // Cor de fundo do menu
    width: '100%', // Largura total da tela
    height: 100, // Altura fixa do menu
    position: 'absolute', // Fixa o menu no fundo
    bottom: 0, // Mantém o menu no rodapé
  },
  menuButton: {
    padding: 10, // Espaçamento interno para tornar clicável
  },
});
