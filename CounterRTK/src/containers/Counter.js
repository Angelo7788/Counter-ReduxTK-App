import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../reducer/CounterReducer';

const Counter = () => {
  const {count} = useSelector(state => state.counter);
  // count is the state that we have to read from the counter reducer
  const stateValue = useSelector(state => state.counter.count);
  // if we want to define a new const name
  const dispatch = useDispatch();

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  return (
    <View style={{marginTop: 30}}>
      <Text style={{fontSize: 24, margin: 10}}>Counter Test App</Text>
      <Text
        style={{
          borderWidth: 1,
          fontSize: 24,
          marginHorizontal: 50,
          marginVertical: 10,
        }}>
        Count: {count} count: {stateValue}
      </Text>
      <TextInput
        style={{fontSize: 24, margin: 10, borderWidth: 1, padding:5}}
        onChangeText={setValue1}
        placeholder='Value 1'
      />
      <TextInput
        style={{fontSize: 24, margin: 10, borderWidth: 1, padding:5}}
        onChangeText={setValue2}
        placeholder='Value 2'
      />
      <Button title="INCREMENT" onPress={() => dispatch(increment())} />
      <Button title="DECREMENT" onPress={() => dispatch(decrement())} />
      <Button
        title="INCREMENT 50"
        onPress={() => dispatch(incrementByAmount({value1, value2}))}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Counter;
