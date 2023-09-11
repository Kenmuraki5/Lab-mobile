import { StyleSheet, Text, View, Image, Button, Animated, Easing } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useRef } from "react";

export default Spring = ({ navigation }) => {
    const opacity = useRef(new Animated.Value(1)).current;
    const spinAnim = useRef(new Animated.Value(0)).current;
    
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "360deg"],
    });

    const sequ = () => {
        Animated.sequence([
            Animated.timing(opacity, {
                toValue: 0.3,
                duration: 400,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }),
            Animated.timing(spinAnim, {
                toValue: 0,
                duration: 5000,
                useNativeDriver: true,
            })
        ]).start(() => {
            opacity.setValue(1);
            spinAnim.setValue(0);
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
                        opacity: opacity,
                        transform: [{ rotate: spin }], // Apply the spin animation
                        margin: 20,
                    }}
                    source={require('./5.png')}
                    resizeMode='contain'
                />
            </View>

            <View style={{ justifyContent: 'center' }}>
                <View style={[{ margin: 10, width: 300 }]}>
                    <Button title={"Spring"} onPress={sequ} />
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
