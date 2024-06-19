import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import styles from "../Login/style";
import { useNavigation } from "@react-navigation/native";
import logo from "../../../assets/Disney+_logo.svg.png";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigator = useNavigation();

  const handleLogin = () => {
    console.log(email);
    console.log(password);
    navigator.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: "90%", height: "20%", marginLeft: 15 }}
        source={logo}
        alt="Logo da disney"
      />
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

export default Login;
