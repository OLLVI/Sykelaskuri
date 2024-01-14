import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [ikä, setIkä] = useState(0);
  const [minSyke, setMinSyke] = useState(0);
  const [maxSyke, setMaxSyke] = useState(0);


  function laskeSyke() {
    const age = parseInt(ikä);

    if (isNaN(age)) {
      alert('Please enter valid age');
} else {
  console.log(ikä);
      const calculatedMaxSyke = Math.round ((220 - ikä) * 0.85);
      const calculatedMinSyke = Math.round ((220 - ikä) * 0.65);
      setMinSyke(calculatedMinSyke);
      setMaxSyke(calculatedMaxSyke);
}
      

    
  }


    return (
      <View style={styles.container}>
        <>
        <Text style={styles.age}>Age</Text>
        <TextInput
          style={{ width: 200, borderColor: 'gray', borderWidth: 1, padding: 5 }}
          onChangeText={text => setIkä(text)}
          value={ikä.toString()}
          keyboardType='numeric'
        />
        </>
        <Text style={styles.limits}>Limits {minSyke}-{maxSyke} </Text>
        <StatusBar style="auto" />
        <Button
        onPress={laskeSyke}
        title="Calculate"
        titleStyle={styles.buttonText}
      />
      </View>
      
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    age: {
      fontSize: 15,
      fontWeight: 'bold',
      padding: 10,
    },
    limits: {
      fontSize: 15,
      padding: 10,
    },
    buttonText: {
      margin: 10,
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
    },
  });
