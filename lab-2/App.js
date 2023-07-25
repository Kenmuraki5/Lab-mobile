// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Lab2_2 } from './component/Detail'
import { Lab2_1 } from './component/Home';
import { Lab3_1 } from './component/lab3-1'
import { Lab3_2 } from './component/lab3-2'
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Lab2_1}
          options={{ title: 'lab2.1' }}
        />
        <Stack.Screen name="Lab2.2" component={Lab2_2} options={{ title: 'lab2.2' }} />
        <Stack.Screen name="Lab3.1" component={Lab3_1} options={{ title: 'Lab3.1' }} />
        <Stack.Screen name="Lab3.2" component={Lab3_2} options={{ title: 'Lab3.2' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const Lab2_1 = ({ navigation }) => {
//   const but = ['programs as', 'about us']
//   return (
//     <View style={styles.container}>
//       <View style={[{ alignItems: 'center' }, { flex: 10 }, { justifyContent: 'center' }]}>
//         <Image style={{ width: 120, height: 100, margin: 20 }} source={require('./IT_Logo.png')} />
//         <Text style={{ fontSize: 25, fontWeight: 'bold' }}>คณะเทคโนโลยีสารสนเทศ</Text>
//         <Text>สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</Text>
//       </View>

//       <View style={{ flex: 2, justifyContent: 'center' }}>
//         {but.map((x, index) => {
//           return <View style={[{ margin: 10, width: 300, }]} key={index}>
//             <Button title={x} onPress={() => navigation.navigate('detail')} />
//           </View>
//         })}
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

// const picture = [
//   { url: require('./1.jpg'), name: "Artificial Intellegent Techonology" },
//   { url: require('./2.jpg'), name: "Bussiness Information Techonology", name2: "(International Programs)" },
//   { url: require('./3.jpg'), name: "Data Science and Bussiness Analytics" },
//   { url: require('./4.jpg'), name: "Information Techonology" },
// ];

// const Lab2_2 = () => {
//   return (
//     <SafeAreaView style={styles2.container}>
//       <View style={styles2.header}>
//         <Image
//           style={styles2.logo}
//           source={require('./IT_Logo.png')}
//         />
//         <Text style={{ fontSize: 40, color: 'blue', fontWeight: 'bold' }}>Programs</Text>
//       </View>
//       <ScrollView contentContainerStyle={styles2.scrollViewContent}>
//         {picture.map((x, index) => {
//           return (
//             <View key={index}>
//               <TouchableOpacity>
//                 <Image source={x.url} />
//                 <View style={styles2.button}>
//                   <Text style={styles2.hel}>{x.name}</Text>
//                   {x.name2 ? <Text style={styles2.hel}>{x.name2}</Text> : ""}
//                 </View>

//               </TouchableOpacity>
//             </View>
//           );
//         })}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };


// const styles2 = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 25,
//     backgroundColor: '#AAD9E6'
//   },
//   logo: {
//     width: 60,
//     height: 50,
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//     alignItems: 'center',
//   },
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 50,
//     backgroundColor: '#DDDDDD',
//   },
//   hel: {
//     fontWeight: 'bold',
//     fontSize: 15,
//   }
// });


export default MyStack
