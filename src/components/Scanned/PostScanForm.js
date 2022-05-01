import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Context as FoodContext } from "../../context/mainContext";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";


const PostScanForm = (props) => {
    const navigation = useNavigation();
    const VALUE_INCREMENT = 1;
    const { state, save_pantry_item } = useContext(FoodContext);
    const [quantity, setQuantity] = useState(0);
    const barcode = state.response.barcode;

    const setValue = (quantity, change) => {
        if (quantity + change < 0) {
            return;
        } else {
            setQuantity(quantity + change);
        }
    }

    return (
        <>
            <View style={[styles.container]}>
                <View style={styles.leftIconButtonRow}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={styles.leftIconButton}
                    >
                        <MaterialCommunityIconsIcon
                            name="backspace"
                            style={styles.leftIcon}
                        />
                    </TouchableOpacity>
                    <View style={styles.textWrapper}>
                        <Text numberOfLines={1} style={styles.scanner}>{state.response.product_name}</Text>
                    </View>
                </View>
                <View style={styles.leftIconButtonRowFiller}></View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={styles.rightIconButton}
                >
                    <MaterialCommunityIconsIcon
                        name="home"
                        style={styles.rightIcon}
                    />
                </TouchableOpacity>
            </View>
            <Image
                source={{
                    uri: `${state.response.image}`,
                }}
                style={styles.image}
            />
            <Text style={styles.scanBarcodeName}>{state.response.product_name}</Text>

            <View style={styles.itemCounterArea}>
                <TouchableOpacity
                    onPress={() => setValue(quantity, -1 * VALUE_INCREMENT)}>
                    <MaterialCommunityIconsIcon name="minus-circle" style={styles.minus} />
                </TouchableOpacity>
                <Text style={styles.counter}>{quantity}</Text>
                <TouchableOpacity
                    onPress={() => setValue(quantity, VALUE_INCREMENT)}>
                    <MaterialCommunityIconsIcon name="plus-circle" style={styles.plus} />
                </TouchableOpacity>
            </View>

            <View style={styles.nutritionalFacts} />
            <View style={styles.itemCounterContainer}>
                <TouchableOpacity
                    style={[styles.acceptContainer, styles.acceptContainer2]}
                    onPress={() => save_pantry_item({ barcode, quantity })}>
                    <Text style={styles.accept}>Accept</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 250,
        width: 250,
        marginTop: "10%",
        alignSelf: "center"
    },
    nameContainer: {
        height: 100,
        width: "95%",
        alignSelf: "center"
    },
    scanBarcodeName: {
        fontFamily: "roboto-700",
        color: "#121212",
        textAlign: "center",
        fontSize: 30,
        flex: 1
    },
    nutritionalFacts: {
        height: 258,
        width: "90%",
        marginTop: 2,
        marginLeft: "5%"
    },
    itemCounterContainer: {
        height: 100,
        width: "100%",
        marginTop: 0
    },
    minus: {
        right: 60,
        position: "absolute",
        color: "rgba(0,159,37,1)",
        fontSize: 40
    },
    plus: {
        left: 60,
        position: "absolute",
        color: "rgba(0,159,37,1)",
        fontSize: 40
    },
    itemCounterArea: {
        flexDirection: "row",
        alignSelf: "center"
    },
    counter: {
        fontSize: 40,
        color: "rgba(0,0,0,1)"
    },
    acceptContainer: {
        backgroundColor: "rgba(0,159,37,1)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 5,
        paddingLeft: 16,
        paddingRight: 16,
    },
    acceptContainer2: {
        height: 44,
        width: "90%",
        borderRadius: 30,
        marginTop: 3,
        alignSelf: "center"
    },
    accept: {
        color: "#fff",
        fontSize: 17
    },
    container: {
        backgroundColor: "rgba(0,159,37,1)",
        flexDirection: "row",
        alignItems: "center",
        padding: 4,
        justifyContent: "space-between",
        shadowColor: "#111",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        elevation: 3,
        height: 80,
        width: "100%"
    },
    leftIconButton: {
        padding: 11
    },
    leftIcon: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 24,
        marginBottom: 0
    },
    textWrapper: {
        alignSelf: "flex-end",
        marginLeft: 32,
        marginBottom: 10
    },
    scanner: {
        fontSize: 18,
        color: "#FFFFFF",
        backgroundColor: "transparent",
        lineHeight: 18
    },
    leftIconButtonRow: {
        flexDirection: "row",
        marginTop: 26,
        marginBottom: 0
    },
    leftIconButtonRowFiller: {
        flex: 1,
        flexDirection: "row"
    },
    rightIconButton: {
        padding: 11,
        alignItems: "center",
        marginTop: 23
    },
    rightIcon: {
        backgroundColor: "transparent",
        color: "#FFFFFF",
        fontSize: 30
    }
});

export default PostScanForm;