import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../components/Styles';

const ScoreScreen = ({ route }) => {
  const { name, email, score } = route.params;
  const navigation = useNavigation();

  const GoBack = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text style={styles.text}>Obrigado, {name}, por participar do quiz!</Text>
      <Text style={styles.text}>Email: {email}</Text>
      <Text style={styles.text}>Nota Final: {score}</Text>
      <View style={styles.bigbutton}>
      <Button title="Tentar novamente" onPress={GoBack} />
      </View>
    </View>
  );
};

export default ScoreScreen;

