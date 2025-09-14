import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles as joinStyles } from "@/styles/_join";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignin = () => {
    console.log("signin", { email, password });
  };

  return (
    <View style={joinStyles.container}>
      <Text style={joinStyles.title}>Sign in</Text>

      <TextInput
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        style={joinStyles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={joinStyles.input}
        secureTextEntry
      />

      <TouchableOpacity style={joinStyles.button} onPress={onSignin}>
        <Text style={joinStyles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
