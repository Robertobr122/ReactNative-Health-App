import React, { useState, useEffect } from 'react';
import { View, ScrollView, Animated } from 'react-native';
import BottomMenu from './components/ButtonMenu/ButtonMenu'; // Menu inferior
import Header from './components/Header/Header'; // Cabeçalho
import styles from './style'; // Estilos gerais
import GreetingInput from './components/GreetingInput/GreetingInput';
import Selection from './components/Selection/Selection';
import FilterButton from './components/FilterButton/FilterButton';
import { profiles } from './Data'; // Importando os dados
import Profile from './components/Profile/ProfileCard'



export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0)); // Controla a rolagem
  const [isVisible, setIsVisible] = useState(true); // Controla a visibilidade do cabeçalho
  const [city, setCity] = useState(''); // Estado para a cidade
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]); // Estado para opções selecionadas

  // Função para alternar seleção de opções
  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  useEffect(() => {
    let previousOffset = 0;

    const scrollListener = scrollY.addListener(({ value }) => {
      if (value > previousOffset && value > 50) {
        setIsVisible(false); // Esconde o cabeçalho ao rolar para baixo
      } else if (value < previousOffset) {
        setIsVisible(true); // Mostra o cabeçalho ao rolar para cima
      }
      previousOffset = value; // Atualiza a posição anterior
    });

    return () => {
      scrollY.removeListener(scrollListener); // Remove o listener ao desmontar o componente
    };
  }, [scrollY]);

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <Header isVisible={isVisible} />

      {/* Área de rolagem */}
      <ScrollView
        style={styles.scrollContainer}
        onScroll={(event) => {
          const offset = event.nativeEvent.contentOffset.y;
          scrollY.setValue(offset); // Atualiza o estado de rolagem
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.input}>
          <GreetingInput onCityChange={setCity} />
        </View>

        <View>
          <Selection
            selectedOptions={selectedOptions}
            onToggleOption={toggleOption} />
        </View>

        <FilterButton city={city} selectedOptions={selectedOptions} />

        <View style={styles.content}>
          {profiles.map((profile) => (
            <Profile
              key={profile.id}
              imageUri={profile.imageUri}
              name={profile.name}
              subtitle={profile.subtitle}
              stars={profile.stars}
              onProfilePress={() => console.log(`Perfil de ${profile.name}`)}
              onChatPress={() => console.log(`Chat com ${profile.name}`)}
            />
          ))}
        </View>
      </ScrollView>

      {/* Menu inferior */}
      <BottomMenu />
    </View>
  );
}