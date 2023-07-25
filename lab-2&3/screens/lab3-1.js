import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const Lab3_1 = ({ navigation }) => {
    const [text, setText] = useState("");
    const [text2, setText2] = useState([]);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>สมุดบันทึก</Text>
            <TextInput
                placeholder="เพิ่มข้อความที่นี่"
                style={{ borderWidth: 1, margin: 12, height: 40, padding: 10, width: '70%' }}
                value={text}
                onChangeText={(input) => { setText(input); }}
            />
            <View style={{width:'70%'}}>
                <Button title='บันทึก' onPress={text?() => { setText2([...text2, text]); setText("") } : undefined}></Button>
            </View>
            
            <FlatList
                data={text2}
                renderItem={({ item }) => <Text style={{ fontSize: 70 , textAlign:'center'}}>{item}</Text>}
                keyExtractor={(item, index) => index}
            />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export { Lab3_1 }