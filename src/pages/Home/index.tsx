import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../Home/style';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamsList } from '../../routes';

type screenProp = NativeStackNavigationProp<RootStackParamsList, 'Home'>;



const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Disney Plus!</Text>
    </View>
  );
};

export default Home;
