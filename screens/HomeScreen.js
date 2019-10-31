import { LinearGradient } from "expo-linear-gradient";
import React, { Component } from "react";
import axios from "axios";
import OrientationLoadingOverlay from "react-native-orientation-loading-overlay";
import { showMessage, hideMessage } from "react-native-flash-message";
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
      Loading: false,
      Name: "",
      NameValidation: false,
      Email: "",
      EmailValidation: false,
      Message: "",
      MessageValidation: false,
      formValidationStatus: false
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
  checkFormValidationStatus = () =>{
    let { NameValidation, EmailValidation, MessageValidation } = this.state;
    if(NameValidation == false || EmailValidation == false || MessageValidation == false){
      this.setState({formValidationStatus : false})
    }else{
      this.setState({formValidationStatus : true})
    }
  }
  inputPress = (text, type) => {
    let newState = this.state;
    newState[type] = text
    this.setState(newState)
    if(type == "Name"){
      this.nameValidation()
    }
    else if(type == "Email"){
      this.emailValidation()
    }
    else{
      this.messageValidation()
    }
    this.checkFormValidationStatus()
  };
  nameValidation  = () => {
    let Name = this.state.Name;
    if(Name == ""){
      this.setState({ NameValidation: false });
      showMessage({
        message: "Please Enter your Name",
        type: "danger"
      });
    }
    else{
      this.setState({ NameValidation: true });
    }
  }
  emailValidation = () =>{
    let Email = this.state.Email;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
      if(reg.test(Email) === false){
        this.setState({ EmailValidation: false });
        showMessage({
          message: "Please Enter Valid Email",
          type: "danger"
        });
      }
      else{
        this.setState({ EmailValidation: true });
      }
  }
  messageValidation = () =>{
    let Message = this.state.Message;
    if(Message == ""){
      this.setState({ MessageValidation: false });
      showMessage({
        message: "Please Enter Message",
        type: "danger"
      });
    }
    else{
      this.setState({ MessageValidation: true });
    }
  }
  handleSubmitButton = () => {
    this.setState({ Loading: true });
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
        this.setState({ Loading: false, Name: "", Email: "", Message: "" });
        showMessage({
          message: "Details Saved Successfully",
          type: "info"
        });
      })
      .catch(error => {
        this.setState({ Loading: false });
        showMessage({
          message: "OOPS Something went wrong. Please Try Again!!!",
          type: "info"
        });
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
                onChangeText={text => this.inputPress(text, "Name")}
                value={this.state.Name}
                selectionColor={"#bdc2c9"}
                onBlur={() => this.nameValidation()}
                style={[
                  styles.textBoxForName,
                  this.state.NameValidation ? null : styles.Error
                ]}
              ></TextInput>
            <TextInput
              placeholder="Your Email Address"
              onChangeText={text => this.inputPress(text, "Email")}
              value={this.state.Email}
              onBlur={() => this.emailValidation()}
              selectionColor={"#bdc2c9"}
              style={[
                styles.textBoxForEmail,
                this.state.EmailValidation ? null : styles.Error
              ]}
            ></TextInput>
            <TextInput
              placeholder="Message"
              multiline={true}
              numberOfLines={4}
              value={this.state.Message}
              onChangeText={text => this.inputPress(text, "Message")}
              onBlur={() => this.messageValidation()}
              selectionColor={"#bdc2c9"}
              style={[
                styles.textBoxForMessage,
                this.state.MessageValidation ? null : styles.Error
              ]}
            ></TextInput>
            <View style={styles.Submitbuttom}>
              <Button
                title="Submit"
                color="#ed8e53"
                onPress={() => this.handleSubmitButton()}
                disabled={!this.state.formValidationStatus}
              ></Button>
            </View>
          </View>
        </LinearGradient>
        <OrientationLoadingOverlay
          visible={this.state.Loading}
          color="white"
          indicatorSize="large"
          messageFontSize={24}
          message="Please Wait..."
        />
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  LoadingImage: {
    width: 300,
    height: 300
  },
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
  },
  Error: {
    borderWidth: 3,
    borderColor: "#d19b28"
  }
});
