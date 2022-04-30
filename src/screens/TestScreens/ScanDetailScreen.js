import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, Text, StyleSheet, Image, Button } from "react-native";
import { Context as FoodContext } from "../../context/mainContext";
import ItemCounter from "../../components/custom-components/ItemCounter";
import Spacer from "../../components/custom-components/Spacer";

const ScanDetailScreen = () => {
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 48 }}>Scan Detail Screen</Text>
      <Spacer />
      <Image
        source={{
          uri: `${state.response.image}`,
        }}
        style={styles.image}
      />
      <Spacer />
      <Text style={{ fontSize: 24 }}>{quantity}</Text>
      <ItemCounter
        product_name={state.response.product_name}
        onIncrease={() => {
          setValue(quantity, VALUE_INCREMENT);
        }}
        onDecrease={() => {
          setValue(quantity, -1 * VALUE_INCREMENT);
        }}
      />
      <Spacer />
      <Spacer>
        <Button
          title="Submit"
          onPress={() => save_pantry_item({ barcode, quantity })}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ScanDetailScreen;
