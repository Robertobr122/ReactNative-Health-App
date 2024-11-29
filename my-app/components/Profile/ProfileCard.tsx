import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfilePicture from './ProfilePicture/ProfilePicture';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStars from './ProfileStars/ProfileStars';
import ActionButtons from './ActionButtons/ActionButtons';
import {styles} from './ProfileCardStyle'

interface ProfileCardProps {
  imageUri: string;
  name: string;
  subtitle: string;
  stars: number;
  onProfilePress: () => void;
  onChatPress: () => void;
}

export default function ProfileCard({
  imageUri,
  name,
  subtitle,
  stars,
  onProfilePress,
  onChatPress,
}: ProfileCardProps) {
  return (
    <View style={styles.container}>
      <ProfilePicture imageUri={imageUri} />
      <View style={styles.details}>
        <ProfileInfo name={name} subtitle={subtitle} />
        <ProfileStars stars={stars} />
        <ActionButtons onProfilePress={onProfilePress} onChatPress={onChatPress} />
      </View>
    </View>
  );
}