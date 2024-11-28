import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Para ícones dos checkboxes
import styles  from './SelectionStyle';

const options = [
    'Enfermeiro',
    'Nutricionista',
    'Médico',
    'Fisioterapeuta',
    'Educador Físico',
    'Todos',
];

export default function Selection() {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const toggleOption = (option: string) =>{
        if(selectedOptions.includes(option)){
            setSelectedOptions(selectedOptions.filter((item) => item !== option));

        } else {
            setSelectedOptions([...selectedOptions, option]);
        }

    };
    return (
    <View style={styles.container}>
        <View style={styles.optionConteiner2}>
        {options.map((option) => (
            <TouchableOpacity
            key = {option}
            style = {styles.optionContainer}
            onPress={()=> toggleOption(option)}
            >
                <View style={styles.checkbox}>
                    {selectedOptions.includes(option) && (
                        <Ionicons name='close' size={16} color='#008970'></Ionicons>
                    )}
                </View>
                <Text style={styles.optionText}>{option}</Text>

                
            </TouchableOpacity>

        ))}
        </View>


    </View>
  );
}