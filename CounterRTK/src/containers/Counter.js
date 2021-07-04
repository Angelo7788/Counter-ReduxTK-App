import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  delayIncrement,
  thunkIncrementAmount,
  thunkIncrementIfCount0,
} from '../reducer/CounterReducer';
import { getPostsFromJsonServer, getOnePostsFromJson } from '../reducer/postListReducer';


const Counter = () => {
  const {count} = useSelector(state => state.counter);
  // count is the state that we have to read from the counter reducer
  const stateValue = useSelector(state => state.counter.count);
  // if we want to define a new const name
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPostsFromJsonServer({limit:1}))
  },[dispatch]);
  // we want to fetch only 5 posts

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
        title="INCREMENT value1 - value2"
        onPress={() => dispatch(incrementByAmount({value1, value2}))}
      />
      <Button title="DELAY INCR" onPress={() => dispatch(delayIncrement())} />
      <Button title="INCR by value 1" onPress={() => dispatch(thunkIncrementAmount(Number(value1)))} />
      <Button title="INCR if 0" onPress={() => dispatch(thunkIncrementIfCount0(Number(value1)))} />
      <Button title="get post" onPress={() => dispatch(getOnePostsFromJson(Number(2)))} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Counter;
