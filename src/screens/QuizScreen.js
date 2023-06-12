import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import quizData from '../data/quizData';
import styles from '../components/Styles';

const QuizScreen = ({ route }) => {
  const { name, email } = route.params;
  const navigation = useNavigation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (selectedAnswerIndex) => {
    if (answered) {
      return; // previne ganhar multiplos pontos clicando na resposta certa varias vezes
    }
    const correctAnswerIndex = quizData[currentQuestion].answerIndex;
    setSelectedAnswer(selectedAnswerIndex);
    setAnswered(true);
  
    if (selectedAnswerIndex === correctAnswerIndex) {
      setScore(score + 1);
    }
  
    setTimeout(() => {
        setSelectedAnswer(null);
        setAnswered(false);
        const nextQuestion = currentQuestion + 1;
      
        if (nextQuestion < quizData.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          navigation.navigate('Score', { name, email, 
            score: score + (selectedAnswerIndex === correctAnswerIndex ? 1 : 0) });
        }
      }, 500);
  };

  return (
    <View>
      <Text style={styles.text}>Pergunta: {quizData[currentQuestion].question}</Text>
      {quizData[currentQuestion].options.map((option, index) => (
        <View key={index} style={styles.button}>
          <Button
            title={option}
            onPress={() => handleAnswer(index)}
            color={
                answered && index === quizData[currentQuestion].answerIndex
                ? 'green' 
                : answered && selectedAnswer === index
                ? 'red' 
                : 'blue'
            }
          />
        </View>
      ))}
    </View>
  );
};

export default QuizScreen;
