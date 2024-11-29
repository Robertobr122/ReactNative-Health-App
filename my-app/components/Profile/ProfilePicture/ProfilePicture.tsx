import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './ProfilePictureStyle';

interface ProfilePictureProps {
    imageUri: string; // Propriedade para receber a URL da imagem
  }

  export default function ProfilePicture({ imageUri }: ProfilePictureProps) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
    );
  }