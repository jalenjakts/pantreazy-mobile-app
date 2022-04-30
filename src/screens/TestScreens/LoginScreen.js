import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import { Context as AuthContext } from '../../context/authContext';
import Spacer from '../../components/custom-components/Spacer';
import NavLink from "../../components/custom-components/NavLink";

const LoginTestScreen = ({ navigation }) => {
  const { state, login, clearErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView>
      <Spacer>
        <Text h3> Login Screen</Text>
      </Spacer>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title="Login"
          onPress={() => {
            login({ email, password });
          }}
        />
      </Spacer>
      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign up today!"
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
})

export default LoginTestScreen;