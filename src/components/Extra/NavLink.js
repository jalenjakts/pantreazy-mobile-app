import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavLink = ({ routeName, buttonName }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            navigation.navigate(routeName);
        }}>
            <View style={styles.underline}>
                <Text style={styles.text}>{buttonName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginTop: "20%",
        minWidth: "48%",
        backgroundColor: "transparent",
    },
    text: {
        textAlign: "center",
        fontSize: 25,
        color: "rgba(83,83,83,1)",
        textAlign: "center",
        fontWeight: "500",
        paddingBottom: 5
    },
    underline: {
        borderBottomWidth: 4,
        marginHorizontal: 50,
        borderBottomColor: "rgba(0,159,37,1)",
    }
})

export default NavLink;