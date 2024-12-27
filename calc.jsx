import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const App = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
       
        const calcResult = eval(expression); 
        setResult(calcResult.toString());
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression((prev) => prev + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        {['7', '8', '9', '/', 'C', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.button, item === '=' && styles.equalsButton]}
            onPress={() => handlePress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.footer}>Calc by Ritesh</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  expression: {
    fontSize: 28,
    color: '#555',
  },
  result: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
  },
  buttons: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    width: '22%',
    margin: '2%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 10,
  },
  equalsButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: '#eaeaea',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default App;
