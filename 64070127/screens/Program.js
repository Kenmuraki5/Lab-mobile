import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, FlatList, Button } from 'react-native';
import React from 'react'
import picture from '../model/data';

const Program = ({ route, navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={picture}
                    renderItem={({ item, index }) =>
                        <View key={index} style={styles2.program}>
                            <Image source={item.url} style={{ width: "60%", height: 150, borderRadius: 10 }} />
                            <View>
                                <Text style={styles2.hel}>{item.name}</Text>
                                <Text style={{ textAlign: "center", margin: 10 }}>4years</Text>
                                <Button title={"READ MORE"}
                                    onPress={() => navigation.navigate("Readmore", { title: item.name, detail: item.detail, name:item.fullname, sdf:item.sdf})}
                                />
                            </View>
                        </View>}
                />
            </View>
        </SafeAreaView>
    )
}

export default Program

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        backgroundColor: '#AAD9E6'
    },
    logo: {
        width: 60,
        height: 50,
    },
    hel: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: "center"
    },
    program: {
        flexDirection: 'row',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
    },
});