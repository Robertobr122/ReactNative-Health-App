import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  greeting:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#008970'
  },
  input: {
    height: 50,
    borderRadius: 18,
    paddingHorizontal: 10,
    backgroundColor: '#008970',
    alignItems: 'center',
    color:'#f9f9f9'

  },
  inputContainer: {
    marginTop:20,
    flexDirection: 'row', // Ícone e input na mesma linha
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#008970',
  },
  icon: {
    marginRight: 10, // Espaço entre o ícone e o campo de texto
  },

});