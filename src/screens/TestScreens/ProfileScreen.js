import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../../components/custom-components/Spacer';
import { Context as AuthContext } from '../../context/authContext';

const ProfileScreen = ({ navigation }) => {

    const { state, signout } = useContext(AuthContext);

    return (
        <SafeAreaView forceInse={{ top: 'always' }}>
            <Spacer>
                <Text style={{ fontSize: 48 }}> Profile Screen</Text>
                <Button
                    title="Sign Out"
                    onPress={() => {
                        signout()
                    }}
                />
            </Spacer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default ProfileScreen;