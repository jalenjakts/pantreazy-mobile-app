import React, { useContext, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Text, Button } from 'react-native-elements';
import { Context as AuthContext } from '../../context/authContext';
import Spacer from '../../components/custom-components/Spacer';
import NavLink from '../../components/custom-components/NavLink'


const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPass] = useState('');

    return (
        <ScrollView>
            <View style={styles.container}>
                <Spacer>
                    <Text h3>SignupScreen</Text>
                </Spacer>
                <Input
                    label="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                    autoCorrect={false}
                />
                <Spacer />
                <Input
                    label="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                    autoCorrect={false}
                />
                <Spacer />
                <Input
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCorrect={false}
                />
                <Spacer />
                <Input
                    secureTextEntry
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Spacer />
                <Input
                    secureTextEntry
                    label="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPass}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                {state.errorMessage ? (
                    <Text style={styles.errorMessage}>{state.errorMessage}</Text>
                ) : null}
                <Spacer>
                    <Button
                        title="Create Account"
                        onPress={() => signup({ firstName, lastName, email, password, confirmPassword })}
                    />
                </Spacer>
                <NavLink
                    routeName="Login"
                    text="Already have an account? Sign in instead!"
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15
    }
});

export default SignupScreen;