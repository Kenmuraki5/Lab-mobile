import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

const Lab8 = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: (evt, gestureState) => {
      const touches = evt.nativeEvent.touches;
      if (touches.length == 1) {
        // console.log(pan.x, pan.y)
        pan.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
      } else if (touches.length >= 2) {
        Animated.spring(scale, {
          toValue: 3,
          useNativeDriver: false,
        }).start()
      }
    },
    onPanResponderRelease: () => {
        Animated.spring(scale, {
            toValue: 1,
            friction:3,
            useNativeDriver: false,
        }).start();
      pan.flattenOffset();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        {...panResponder.panHandlers}
        style={[
          { width: 120, height: 120, margin: 20 },
          {
            transform: [
            //   { translateX: pan.x },
            //   { translateY: pan.y },
              { scale: scale },
            ],
          },pan.getLayout()
        ]}
        source={require("./5.png")}
        resizeMode="contain"
      />
    </View>
  );
};

export default Lab8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
