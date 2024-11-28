import React, { useState, useEffect } from 'react';
import { View, ScrollView, Animated } from 'react-native';
import BottomMenu from './components/BottonMenu/BottonMenu'; // Menu inferior
import Header from './components/Header/Header'; // Cabeçalho
import styles from './style'; // Estilos gerais
import { GreetingInput } from './components/GreetingInput/GreetingInput';
import Selection  from './components/Selection/Selection';


export default function App() {
  const [scrollY, setScrollY] = useState(new Animated.Value(0)); // Controla a rolagem
  const [isVisible, setIsVisible] = useState(true); // Controla a visibilidade do cabeçalho

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
          <GreetingInput/>
        </View>

        <View>
          <Selection/>
        </View>

        <View style={styles.content}>

          {Array.from({ length: 50 }).map((_, index) => (
            <Animated.Text key={index} style={styles.text}>
              Conteúdo da página {index + 1}.
            </Animated.Text>
          ))}

        </View>
      </ScrollView>

      {/* Menu inferior */}
      <BottomMenu />
    </View>
  );
}