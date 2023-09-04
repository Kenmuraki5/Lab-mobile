import { StyleSheet, Text, View, Image, Button, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useRef } from "react";

export default Spring = ({ navigation }) => {
  const springVal = useRef(new Animated.Value(0.3)).current;

  const spring = () => {
    Animated.spring(springVal, {
      toValue: 1,
      friction: 1,
    }).start(() => { springVal.setValue(0.3); });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          {
            alignItems: 'center',
            justifyContent: 'center',
            margin: 150,
          },
        ]}
      >
        <Animated.Image
          style={{ width: 120, height: 120, margin: 20, transform: [{ scale: springVal }] }}
          source={require('./5.png')}
          resizeMode='contain'
        />
      </View>

      <View style={{ justifyContent: 'center' }}>
        <View style={[{ margin: 10, width: 300 }]}>
          <Button title={"Spring"} onPress={spring} />
        </View>
      </View>
      <StatusBar style='auto' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
