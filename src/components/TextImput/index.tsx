import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import styles from '../styles/TextInputStyle';

interface TextInputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ placeholder, secureTextEntry, value, onChangeText }) => {
  return (
    <RNTextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default TextInput;
