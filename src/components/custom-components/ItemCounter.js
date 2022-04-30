import React from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const ItemCounter = ({ product_name, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text style={{ fontSize: 24 }}>{product_name}</Text>
            <Button onPress={() => onIncrease()} title="Increase Item" />
            <Button onPress={() => onDecrease()} title="Decrease Item" />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ItemCounter;
