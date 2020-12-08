import React from 'react'
import { Button, TextInput, View, Text, StyleSheet } from 'react-native'

import Card from '../components/Card'
import Colors from '../constants/colors'

const StartGameScreen = prop => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The game screen ! ! !</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number:</Text>
        <TextInput style={styles.input} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button title='Reset' onPress={() => {}} color={Colors.secondary} /></View>
          <View style={styles.button}><Button title='Confirm' onPress={() => {}} color={Colors.primary} /></View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15
  },
  input: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: 30,
    marginBottom: 10
  },
  button: {
    width: 90
  }
})

export default StartGameScreen
