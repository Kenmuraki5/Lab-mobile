import { StyleSheet, Text, View, Image, Button, Animated, Easing } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useRef } from "react";

export default Spring = ({ navigation }) => {
    const animV1 = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0
    const animV2 = useRef(new Animated.Value(0)).current;

    const spin = animV2.interpolate({
        inputRange: [0, 1, 2, 3, 4],
        outputRange: [0, -70, 0, 70, 0],
    });

    const animate = () => {
        console.log("animate...");
        Animated.parallel([
            Animated.spring(animV1, {
                toValue:1.4,
                friction:1,
                useNativeDriver: true,
            }),
            Animated.timing(animV2, {
                toValue: 4,
                useNativeDriver: true,
                duration:3500,
                easing:Easing.bounce

            }),
        ]).start(() => {
            animV1.setValue(1);
            animV2.setValue(0);
        });
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
                    style={{
                        width: 120,
                        height: 120,
                        margin: 20,
                        transform:[{scale:animV1}]
                    }}
                    source={require('./5.png')}
                    resizeMode='contain'
                />
                <Animated.Text style={{transform: [{ translateX: spin }], width:250,textAlign:'center'}} >Welcome to Faculty of IT!</Animated.Text>
            </View>

            <View style={{ justifyContent: 'center' }}>
                <View style={[{ margin: 10, width: 300 }]}>
                    <Button title={"Spring"} onPress={animate} />
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
