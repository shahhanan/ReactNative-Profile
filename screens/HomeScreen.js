import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  Image,
  Platform,
  ToastAndroid,
  StyleSheet,
  Text,
  BackHandler,
  View,
  TextInput,
  Button,
  Alert,
  ScrollView,
  TouchableHighlight
} from "react-native";
export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Email: "",
      Message: ""
    };
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton() {
    ToastAndroid.show("Can't go Back!", ToastAndroid.SHORT);
    return true;
  }
  validateEmail = email => {};
  handleSubmitButton = () => {
    const formData = {
      Name: this.state.Name,
      Email: this.state.Email,
      Message: this.state.Message
    };
    axios
      .post(
        "https://reactnative-8b51f.firebaseio.com/userProfile.json",
        JSON.stringify(formData)
      )
      .then(Response => {
        console.log(Response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#d19b28", "#20b0a9", "#188f89"]}
          style={styles.LinearGradient}
        >
          <Image style={styles.myImage} source={require("../assets/h2.jpg")} />
          <Text style={styles.textForName}>Please Enter your Details</Text>
          <View style={styles.detailsContainer}>
            <TextInput
              placeholder="Name"
              onChangeText={text => this.setState({ Name: text })}
              selectionColor={"#bdc2c9"}
              style={styles.textBoxForName}
            ></TextInput>
            <TextInput
              placeholder="Your Email Address"
              onBlur={email => this.validateEmail()}
              onChangeText={text => this.setState({ Email: text })}
              selectionColor={"#bdc2c9"}
              style={styles.textBoxForEmail}
            ></TextInput>
            <TextInput
              placeholder="Message"
              multiline={true}
              numberOfLines={4}
              onChangeText={text => this.setState({ Message: text })}
              selectionColor={"#bdc2c9"}
              style={styles.textBoxForMessage}
            ></TextInput>
            <View style={styles.Submitbuttom}>
              <Button
                title="Submit"
                color="#ed8e53"
                onPress={() => this.handleSubmitButton()}
              ></Button>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  LinearGradient: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    justifyContent: "center"
  },
  myImage: {
    width: 180,
    height: 180,
    borderRadius: 200,
    marginBottom: 20
  },
  textForName: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10
  },
  detailsContainer: {
    backgroundColor: "rgba(1,1,1,0.3)",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.16)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    width: 300
  },
  textBoxForName: {
    width: 280,
    height: 50,
    backgroundColor: "rgba(1,1,1,0.3)",
    borderBottomColor: "#bdc2c9",
    borderBottomWidth: 2,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 20,
    paddingHorizontal: 5,
    color: "white"
  },
  textBoxForEmail: {
    width: 280,
    height: 50,
    backgroundColor: "rgba(1,1,1,0.3)",
    borderBottomColor: "#bdc2c9",
    borderBottomWidth: 2,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 20,
    paddingHorizontal: 5,
    color: "white"
  },
  textBoxForMessage: {
    width: 280,
    height: 150,
    backgroundColor: "rgba(1,1,1,0.3)",
    borderBottomColor: "#bdc2c9",
    borderBottomWidth: 2,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 20,
    padding: 5,
    textAlignVertical: "top",
    color: "white"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  Submitbuttom: {
    backgroundColor: "#197580",
    width: 200,
    height: 30,
    marginBottom: 10,
    borderRadius: 5
  }
});
