import { useState } from "react";
import * as React from "react";
import { connect, useSelector } from "react-redux";

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Image,
} from "react-native";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authenticated = useSelector((state) => state.authenticated)
  
  const onSubmithandler = async (e) => {
    console.log(email)
    console.log(password) 
    //e.preventDefault();
    try {
      e.persist
      const response = await authenticated.signIn(
        e.target.email.value,
        e.target.password.value
      )
        props.dispatch({
          type: "CHECK_LOGIN",
          payload: {
            authenticated: response.data,
            uid: response.data.uid
          }
        })
    } 
    catch (error) {
        setMessage(error.response.data.errors[0])
      }
    
    }
  
  return (
    <View testID={"login-form"} style={styles.container}>
      <Text style={styles.sub}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          testID={"email"}
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          id="email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          testID={"password"}
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          id="password"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableHighlight
        testID={"submit"}
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={(e) => onSubmithandler()}
      >
        <Text style={styles.loginText}>Submit</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#409d9b",
  },
  loginText: {
    color: "white",
  },
  sub: {
    color: "#409d9b",
    fontSize: 20,
    fontFamily: "EBGaramond_400Regular",
    padding: 15,
  },
});

export default Login;
