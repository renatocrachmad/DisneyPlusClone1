import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../Home/style';



const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Disney Plus!</Text>
    </View>
  );
};

export default Home;
