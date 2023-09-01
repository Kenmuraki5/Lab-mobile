import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[{ alignItems: 'center' }, { flex: 3 }, { justifyContent: 'center' }]}>
        <Image style={{ width: 120, height: 120, margin: 20 }} source={require('../pics/IT_Logo.png')} resizeMode='contain' />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>คณะเทคโนโลยีสารสนเทศ</Text>
        <Text>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
      </View>
    </SafeAreaView>

  )
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});