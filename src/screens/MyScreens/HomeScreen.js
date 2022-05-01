import React, { useContext, useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import MeatsBtn from "../../components/Home/MeatsBtn";
import VegetableBtn from "../../components/Home/VegetableBtn";
import FruitBtn from "../../components/Home/FruitBtn";
import DairyBtn from "../../components/Home/DairyBtn";
import SpiceBtn from "../../components/Home/SpiceBtn";
import GrainBtn from "../../components/Home/GrainBtn";
import OilBtn from "../../components/Home/OilBtn";
import DryGoodBtn from "../../components/Home/DryGoodBtn";
import HomeHeader from "../../components/Home/HomeHeader";
import { Context as FoodContext } from "../../context/mainContext";

const HomeScreen = ({ navigation }) => {
  const { get_pantry } = useContext(FoodContext);

  // useEffect(() => {
  //   get_pantry();
  // }, [])

  return (
    <ScrollView style={styles.container}>
      <HomeHeader style={styles.materialHeader3} />
      <View style={styles.row1}>
        <MeatsBtn style={styles.meat} />
        <VegetableBtn style={styles.veg} />
      </View>
      <View style={styles.row2}>
        <FruitBtn style={styles.fruit} />
        <DairyBtn style={styles.dairy} />
      </View>
      <View style={styles.row3}>
        <SpiceBtn style={styles.spice} />
        <GrainBtn style={styles.grain} />
      </View>
      <View style={styles.row4}>
        <OilBtn style={styles.oil} />
        <DryGoodBtn style={styles.dry} />
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
  row1: {
    height: 147,
    flexDirection: "row",
    marginTop: 50,
  },
  meat: {
    height: 147,
    width: "41%",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    marginLeft: "6%"
  },
  veg: {
    height: 147,
    width: "41%",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    marginLeft: "6%"
  },
  row2: {
    height: 147,
    flexDirection: "row",
    marginTop: 25
  },
  fruit: {
    height: 147,
    width: "41%",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    marginLeft: "6%"
  },
  dairy: {
    height: 147,
    width: "41%",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    marginLeft: "6%"
  },
  row3: {
    height: 147,
    flexDirection: "row",
    marginTop: 25
  },
  spice: {
    height: 147,
    width: "41%",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    marginLeft: "6%"
  },
  grain: {
    height: 147,
    width: "41%",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    marginLeft: "6%"
  },
  row4: {
    height: 147,
    flexDirection: "row",
    marginTop: 25
  },
  oil: {
    height: 147,
    width: "41%",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,
    marginLeft: "6%"
  },
  dry: {
    height: 147,
    width: "41%",
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.3,
    shadowRadius: 0,//"41%"
    marginLeft: "6%"
  },
});

export default HomeScreen;
