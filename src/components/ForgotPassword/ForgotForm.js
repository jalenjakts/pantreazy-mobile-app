import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Context as AuthContext } from "../../context/authContext";

const ForgotForm = (props) => {
    const { state, verify_email } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    return (
        <View>
            <View style={[styles.textInputContainer]}>
                <TextInput placeholder="Email" style={styles.inputStyle} autoCapitalize="none" value={email} onChangeText={setEmail} />
                <Icon name="account-box" style={styles.iconStyle} />
            </View>
            <TouchableOpacity style={[styles.buttonContainer, props.style]} onPress={() => verify_email({ email })}>
                <Text style={styles.verifyEmail}>Verify Email</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    textInputContainer: {
        borderBottomWidth: 1,
        borderColor: "#D9D5DC",
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        height: 43,
        width: "80%",
        marginTop: 8,
        alignSelf: "center"
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.35,
        shadowRadius: 5,
        elevation: 2,
        minWidth: 88,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "rgba(0,159,37,1)",
    },
    inputStyle: {
        color: "#000",
        paddingRight: 16,
        fontSize: 16,
        alignSelf: "stretch",
        flex: 1,
        lineHeight: 16,
        paddingTop: 14,
        paddingBottom: 8
    },
    iconStyle: {
        color: "#616161",
        fontSize: 24,
        paddingRight: 8
    },
    verifyEmail: {
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 20,
    }
})

export default ForgotForm;