import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../../theme/Colors";
import { TextStyles } from "../../../theme/TextStyles";
import { wp } from "../../../utils/Helpers";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Screens } from "../../../config/keys";
import { useSelector } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import Card from "./../../../../assets/shapes/CurvedGround.svg";
import s from "./styles";
const URI =
  "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";
const Home = (props) => {
  const { Available, All, Used } = useSelector((state: any) => state?.common);
  const handleAddButton = () => {
    props.navigation.navigate(Screens.NewRequestStep1);
  };
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#F1D470", "#E08F4C"]}
      style={{ flex: 1 }}
      start={[0.0, 0.5]}
      end={[1.0, 0.5]}
    >
      <View style={s.container}>
        <View style={s.subContainer}>
          <Image
            source={{
              uri: URI,
            }}
            style={s.profileImg}
          />
          <View style={s.card}>
            <Card
              preserveAspectRatio="xMinYMin slice"
              width={"100%"}
              height={250}
            />
            <View style={s.cardSub}>
              <View style={s.cardHeader}>
                <View>
                  <Text style={s.cardHeading}>Dorothy Boone</Text>
                  <Text style={s.cardSubHeading}>PHP Developer</Text>
                </View>
                <TouchableOpacity onPress={handleAddButton}>
                  <Ionicons name="add-circle" size={50} color="black" />
                </TouchableOpacity>
              </View>
              <View style={s.divider} />
              <View style={s.cardFooter}>
                <View style={s.cardFooterBox}>
                  <Text style={s.cardFooterBoxTitle}>Available</Text>
                  <Text style={s.cardFooterBoxSubTitle}>{Available} days</Text>
                </View>
                <View style={s.cardFooterDivider} />
                <View style={s.cardFooterBox}>
                  <Text style={s.cardFooterBoxTitle}>All</Text>
                  <Text style={s.cardFooterBoxSubTitle}>{All} days</Text>
                </View>
                <View style={s.cardFooterDivider} />
                <View style={s.cardFooterBox}>
                  <Text style={s.cardFooterBoxTitle}>Used</Text>
                  <Text style={s.cardFooterBoxSubTitle}>{Used} days</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Home;
