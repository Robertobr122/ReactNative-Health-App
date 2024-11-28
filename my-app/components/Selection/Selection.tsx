import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para ícones dos checkboxes
import styles from './SelectionStyle';

// Definição do tipo das propriedades
interface SelectionComponentProps {
  selectedOptions: string[];
  onToggleOption: (option: string) => void;
}

// Lista de opções
const options = [
  'Enfermeiro',
  'Nutricionista',
  'Médico',
  'Fisioterapeuta',
  'Educador Físico',
  'Todos',
];

export default function Selection({
  selectedOptions,
  onToggleOption,
}: SelectionComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.optionConteiner2}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={styles.optionContainer}
            onPress={() => onToggleOption(option)} // Passa o evento para o pai
          >
            {/* Checkbox */}
            <View style={styles.checkbox}>
              {selectedOptions.includes(option) && (
                <Ionicons name="close" size={16} color="#008970" />
              )}
            </View>
            {/* Texto da opção */}
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
