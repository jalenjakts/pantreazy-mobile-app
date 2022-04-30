import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import NavLink from "./NavLink";

const AuthHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>PantrEazy</Text>
            <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                <NavLink
                    buttonName="Login"
                    routeName="Login"
                />
                <NavLink
                    buttonName="SignUp"
                    routeName="Signup"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 45
    },
    title: {
        marginTop: 50,
        alignItems: 'center',
        textAlign: 'center',
        color: "rgba(0,159,37,1)",
        fontSize: 75,
        justifyContent: 'center'
    },
})

export default AuthHeader;