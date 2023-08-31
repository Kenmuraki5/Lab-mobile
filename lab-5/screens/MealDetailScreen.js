import React from "react";
import { FlatList } from "react-native";
import { View, Text, Button, StyleSheet } from "react-native";
// import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route, navigation}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้

  return (
    <View style={styles.screen}>
      <Text>Dish: {route.params.title}</Text>
      {/* {console.log(route.params.steps)} */}
      <FlatList
        data={route.params.steps}
        renderItem={(item) => {
          return <Text style={{margin:30}}>steps {item.index+1} : {item.item}</Text>
        }}/>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          navigation.navigate("Categories");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin:30
  },
});

export default MealDetailScreen;
