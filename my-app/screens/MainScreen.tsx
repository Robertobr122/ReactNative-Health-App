import React, { useState, useEffect } from 'react';
import { View, ScrollView, Animated } from 'react-native';
import BottomMenu from '../components/ButtonMenu/ButtonMenu'; // Menu inferior
import Header from '../components/Header/Header'; // Cabeçalho
import styles from './MainScreenStyle'; // Estilos gerais
import GreetingInput from '../components/GreetingInput/GreetingInput';
import Selection from '../components/Selection/Selection';
import FilterButton from '../components/FilterButton/FilterButton';
import { profiles } from '../Data'; // Importando os dados
import Profile from '../components/Profile/ProfileCard';

export default function MainScreen({ navigation }: { navigation: any }) {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [isVisible, setIsVisible] = useState(true);
  const [city, setCity] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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
        setIsVisible(false);
      } else if (value < previousOffset) {
        setIsVisible(true);
      }
      previousOffset = value;
    });

    return () => {
      scrollY.removeListener(scrollListener);
    };
  }, [scrollY]);

  return (
    <View style={styles.container}>
      <Header isVisible={isVisible} />
      <ScrollView
        style={styles.scrollContainer}
        onScroll={(event) => {
          const offset = event.nativeEvent.contentOffset.y;
          scrollY.setValue(offset);
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.input}>
          <GreetingInput onCityChange={setCity} />
        </View>

        <View>
          <Selection selectedOptions={selectedOptions} onToggleOption={toggleOption} />
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

      <BottomMenu onProfilePress={() => navigation.navigate('ProfileScreen')} />
    </View>
  );
}
