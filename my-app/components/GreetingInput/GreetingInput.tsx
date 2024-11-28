import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícones

import { styles } from './GreetingInputStyle';

export function GreetingInput() {
  const [city, setCity] = useState(''); // Estado para armazenar o nome da cidade
    return (
    <View>
        <Text style={styles.greeting}>Olá, Roberto!</Text>


        <View style={styles.inputContainer}>
            <Ionicons name="search" size={20} color="#f9f9f9" style={styles.icon} />
            <TextInput style={styles.input} 
                placeholder='Digite sua Cidade'
                placeholderTextColor="#f9f9f9"
                value={city}
                onChangeText={setCity}
            ></TextInput>
        </View>
               
    </View>
  );
}