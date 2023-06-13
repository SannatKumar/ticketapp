import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

export default function App() {
  const[text, setText] = useState('');

  const handleTextChange = (inputText) => {
    console.log("Input Text", inputText);
    setText(inputText);
    console.log(inputText);
  };

  const allData = [];

  const onPress = () => {
    console.log("Props", text);
    Alert.alert("Button is Pressed");
  };
  return (
    <View style={styles.container}>
      <Text>Hello Buddy</Text>
      <Text>{text}</Text>
      <TextInput
        style={styles.showInputText}
        onChangeText={handleTextChange}
        value={text}
        defaultValue='Please Type in'
        />
      <StatusBar style="auto" />
      {/* <Button
        style={styles.submitButton}
        title ="Press Me"
        onPress={onPressAppButton}
      /> */}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009BD6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showInputText:{
    backgroundColor: '#48D7D7',
    height: 40,
    width:200,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 10,
    paddingTop: 5
  },
  submitButton: {
    paddingTop: 10,
    borderRadius: 5,
    backgroundColor: '#3F50AA',
    height: 40,
    width: 200,
    paddingBottom: 25
  }
});
