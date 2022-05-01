import React, { useEffect, useContext } from "react";
import { StyleSheet, View } from "react-native";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import UserPic from "../../components/Profile/UserPic";
import ProfileName from "../../components/Profile/ProfileName";
import ProfileEmail from "../../components/Profile/ProfileEmail";
import HelpBtn from "../../components/Profile/HelpBtn";
import SignOutBtn from "../../components/Profile/SignOutBtn";
import { Context as FoodContext } from "../../context/mainContext";

const ProfileScreen = (props) => {
  const { state, get_user } = useContext(FoodContext);
  useEffect(() => {
    get_user();
  }, [])

  return (
    <View style={styles.container}>
      <ProfileHeader style={styles.materialHeader41} />
      <UserPic style={styles.userPic} />
      <ProfileName style={styles.profileName} profileName={state.response.firstName + " " + state.response.lastName} />
      <ProfileEmail style={styles.profileEmail} profileEmail={state.response.email} />
      <HelpBtn style={styles.materialChipWithCloseButton} />
      <SignOutBtn style={styles.materialChipWithCloseButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(228,243,212,1)"
  },
  materialHeader41: {
    height: 80,
    width: "100%"
  },
  userPic: {
    height: 140,
    width: 140,
    marginTop: 60,
    alignSelf: "center"
  },
  profileName: {
    height: 40,
    width: 240,
    alignSelf: "center"
  },
  profileEmail: {
    height: 40,
    width: 240,
    alignSelf: "center"
  },
  materialChipWithCloseButton: {
    height: 32,
    width: 260,
    shadowColor: "rgba(0,159,37,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.69,
    shadowRadius: 0,
    marginTop: 68,
    alignSelf: "center"
  }
});

export default ProfileScreen;
