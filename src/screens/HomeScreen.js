import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native'; 
import styles from '../components/Styles';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleStartQuiz = () => {
    if (name.length < 3) {
      alert('Nome deve ter no minimo 3 caracteres.');
      return;
    }
    if (email.length < 5) {
      alert('Email deve ter no minimo 5 caracteres.');
      return;
    } 
    navigation.navigate('Quiz', { name, email });
  };

  return (
    <View>
    <View>
        <TextInput style={styles.textInput}
            placeholder="Digite seu nome"
            value={name}
            onChangeText={setName}
        />
    </View>
    <View>
        <TextInput style={styles.textInput}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
        />
    </View>
    <View style={styles.button}>
    <Button title="Start Quiz" onPress={handleStartQuiz} />
    </View>
    </View>
  );
};

export default HomeScreen;
