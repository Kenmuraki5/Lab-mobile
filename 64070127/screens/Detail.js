import { Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Readmore({ route, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <View><Text style={{
          fontWeight: 'bold',
          fontSize: 20,
        }}>{route.params.name}</Text></View>

        <View style={{ marginTop: 20., marginBottom: 20 }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 14,
            marginBottom: 10
          }}>จำนวนหน่วยกิต : {route.params.sdf}</Text>
          <Text>{route.params.detail}</Text>
        </View>
        <Button title={"VIEW STUDY PLAN"}
          onPress={
            () => {
              navigation.navigate("StudyPlan", { title: route.params.title })
            }}></Button>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40
  }
});