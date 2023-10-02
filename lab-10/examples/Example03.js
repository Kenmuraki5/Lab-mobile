import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class Example03 extends Component {
  constructor() {
    super();

    this.state = {
      key: "",
      id: "",
      name: "",
      gpa: "",
    };
  }

  componentDidMount() {
    const subjDoc = firebase
      .firestore()
      .collection("subjects")
      .doc(this.props.route.params.key);
    subjDoc.get().then((res) => {
      if (res.exists) {
        const subj = res.data();
        this.setState({
          key: res.id,
          id: subj.id,
          name: subj.name,
          gpa: subj.gpa,
        });
      } else {
        console.log("Document does not exist!!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  updateSubject() {
    const updateSubjDoc = firebase
      .firestore()
      .collection("subjects")
      .doc(this.state.key);
    updateSubjDoc
      .set({
        id: this.state.id,
        name: this.state.name,
        gpa: this.state.gpa,
      })
      .then(() => {
        Alert.alert(
          "Updating Alert",
          "The subject was updated!! Pls check your DB!!"
        );
        this.props.navigation.navigate("ViewStudent")
      });
  }
  deleteSubject() {
    const delSubjDoc = firebase
      .firestore()
      .collection("subjects")
      .doc(this.state.key);
    delSubjDoc.delete().then((res) => {
      Alert.alert(
        "Deleting Alert",
        "The subject was deleted!! Pls check your DB!!"
      );
      this.props.navigation.navigate("ViewStudent")
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100 }}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Input
          placeholder={"Subject id"}
          value={this.state.id}
          onChangeText={(val) => this.inputValueUpdate(val, "id")}
        />
        <Input
          placeholder={"Subject Name"}
          value={this.state.name}
          onChangeText={(val) => this.inputValueUpdate(val, "name")}
        />
        <Input
          placeholder={"Subject gpa"}
          value={this.state.gpa}
          onChangeText={(val) => this.inputValueUpdate(val, "gpa")}
        />
        <Button
          title="Update Subject"
          onPress={() => {
            this.updateSubject();
          }}
        />
        <Button
          title="Delete Subject"
          containerStyle={{ marginTop: 10 }}
          onPress={() => {
            this.deleteSubject();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default Example03;
