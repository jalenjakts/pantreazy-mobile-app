import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Context as FoodContext } from "../../context/mainContext";

const ScanScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    const { state, scan_barcode } = useContext(FoodContext);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`) // Need to eventually comment that out
        scan_barcode({ data });
    }

    if (hasPermission === null) {
        return <Text>Request for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={[StyleSheet.absoluteFillObject]}
            />
            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
};

const styles = StyleSheet.create({
    barcode: {
        borderWidth: 10,
        borderColor: 'red',
        height: 100,
        width: 200,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default ScanScreen;