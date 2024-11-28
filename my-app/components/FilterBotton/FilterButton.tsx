import React from 'react';
import { TouchableOpacity, Text, Alert, View } from 'react-native';
import styles from './FilterButtonStyle';

interface FilterButtonProps {
    city: string;
    selectedOptions: string[];
}

export default function FilterButton({ city, selectedOptions }: FilterButtonProps) { 
    const handleFilter = () => {
        if (!city.trim() && selectedOptions.length === 0) {
            Alert.alert('Atenção', 'Por favor, insira uma cidade ou selecione ao menos uma opção.');
        } else {
            console.log('Cidade: ', city);
            console.log('Opções selecionais:', selectedOptions);
            Alert.alert('Sucesso', 'As informações foram filtradas com sucesso! Confira o console.');
        }
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handleFilter}>
            <Text style={styles.buttonText}>Filtrar</Text>
        </TouchableOpacity>
    );
}