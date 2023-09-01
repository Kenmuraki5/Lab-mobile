import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react';
import picture from '../model/data';
const Subject = ({ route, navigation }) => {
    const [year, setYear] = useState(""); // input
    const [term, setterm] = useState(""); // input
    const [newa, setarray] = useState([]); // input
    const category = route.params.title == "IT" ? picture[0] : route.params.title == "DSBA" ? picture[1] : route.params.title == "BIT" ? picture[2] : picture[3];
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', flex: 2, marginTop: 10 }}>
                <TextInput
                    placeholder="กรอกชั้นปี"
                    style={{ borderWidth: 1, margin: 10, height: 50, padding: 10, width: 100 }}
                    value={year}
                    onChangeText={(input) => { setYear(input); }}
                />
                <TextInput
                    placeholder="กรอกภาคเรียน"
                    style={{ borderWidth: 1, margin: 10, height: 50, padding: 10, width: 110 }}
                    value={term}
                    onChangeText={(input) => { setterm(input); }}
                />
                <View style={{ margin: 20, width: 60 }}>
                    <Button title={"ค้นหา"} onPress={year && term ? () => {
                        if (year == 1 && term == 1) {
                            setarray(category.yonetermone)
                        }
                        else if (year == 1 && term == 2) {
                            setarray(category.yearonetermtwo)
                        }
                        else if (year == 2 && term == 1) {

                            setarray(category.yeartwotermone)
                        }
                        else {
                            setarray([])
                        }
                    } : undefined}></Button>
                </View>
            </View>
            <View style={{ flex: 9, marginTop: 10 }}>
                {!newa.length? (
                    <Text>No information</Text>
                ) : (
                    <FlatList
                        data={newa}
                        renderItem={({ item, index }) => {
                            return <Text>{item}</Text>;
                        }}
                    />
                )}
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Button title={"กลับสู่หน้าหลักสูตรรวม"} onPress={() => { navigation.navigate("Program") }} />
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default Subject
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});