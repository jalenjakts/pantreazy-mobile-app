import React, { useState, useContext } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Context as FoodContext } from "../../context/mainContext";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";


const PostScanForm = () => {
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
            <Image
                source={{
                    uri: `${state.response.image}`,
                }}
                style={styles.image}
            />
            <Text style={styles.scanBarcodeName}>{state.response.product_name}</Text>
            <View style={styles.itemCounterArea}>
                <TouchableOpacity
                    onPress={() => setValue(quantity, VALUE_INCREMENT)}>
                    <MaterialCommunityIconsIcon name="plus-circle" style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.counter}>{quantity}</Text>
                <TouchableOpacity
                    onPress={() => setValue(quantity, -1 * VALUE_INCREMENT)}>
                    <MaterialCommunityIconsIcon name="minus-circle" style={styles.icon2} />
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
        height: 200,
        width: 200,
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
    icon: {
        right: 60,
        position: "absolute",
        color: "rgba(0,159,37,1)",
        fontSize: 40
    },
    icon2: {
        left: 60,
        position: "absolute",
        color: "rgba(0,159,37,1)",
        fontSize: 40
    },
    itemCounterArea: {
        flexDirection: "row",
        alignSelf: "center"
    },
    textWrapper: {
        flex: 1,
        alignItems: "center",
        padding: 6,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5
    },
    textWrapper2: {
        flex: 1,
        alignItems: "center",
        padding: 6,
        justifyContent: "center"
    },
    textWrapper3: {
        flex: 1,
        alignItems: "center",
        padding: 6,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        left: 240,
        width: 105,
        top: 0,
        height: 29
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
    }
});

export default PostScanForm;