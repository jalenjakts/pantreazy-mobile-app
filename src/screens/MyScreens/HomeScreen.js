import React, { useContext, useEffect } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import HomeHeader from "../../components/Home/HomeHeader";
import { Context as FoodContext } from "../../context/mainContext";
import Item from "../../components/Item";

const HomeScreen = ({ navigation }) => {
  const { state, get_pantry } = useContext(FoodContext);
  useEffect(() => {
    get_pantry();
  }, [])


  return (
    <ScrollView style={styles.container}>
      <HomeHeader style={styles.materialHeader3} />
      <Text style={styles.loremIpsum}>Pantry</Text>
      <View style={styles.row1}>
        <Item style={styles.item1} />
        <Text style={styles.loremIpsum} />
      </View>
      <View style={styles.row2}>

      </View>
      <View style={styles.row3}>

      </View>
      <View style={styles.row4}>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(228,243,212,1)"
  },
  materialHeader3: {
    height: 80,
    width: "100%",
    marginTop: 0
  },
  loremIpsum: {
    fontFamily: "beau-rivage-regular",
    color: "rgba(0,159,37,1)",
    textAlign: "left",
    fontSize: 60,
    height: 90,
    width: "90%",
    marginTop: "10%",
    marginLeft: "4%",
    //alignSelf: "center"
  },
  row1: {
    height: 147,
    flexDirection: "row",
    marginTop: 50,
  },
  item1: {
    position: "absolute",
    top: 0,
    left: "4%",
    height: "0%",
    width: "28%",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0
  },


  row2: {
    height: 147,
    flexDirection: "row",
    marginTop: 25
  },



  row3: {
    height: 147,
    flexDirection: "row",
    marginTop: 25
  },



  row4: {
    height: 147,
    flexDirection: "row",
    marginTop: 25
  },


});

export default HomeScreen;
