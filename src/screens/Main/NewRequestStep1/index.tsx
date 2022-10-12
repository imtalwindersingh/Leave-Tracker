import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { wp } from "../../../utils/Helpers";
import { LinearGradient } from "expo-linear-gradient";
import { Screens } from "../../../config/keys";
import { useSelector } from "react-redux";
import Nipple from "./../../../../assets/icons/nipple.svg";
import Fire from "./../../../../assets/icons/Fire.svg";
import PiggyBank from "./../../../../assets/icons/PiggyBank.svg";
import Sun from "./../../../../assets/icons/Sun.svg";
import moment from "moment";
import Card from "./../../../../assets/shapes/CurvedGround.svg";
import s from "./styles";

const URI =
  "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";
const NewRequestStep1 = (props: { navigation: any }) => {
  const { To, From } = useSelector((state: any) => state.common);
  const [requestType, setRequestType] = useState(null);
  const requestButtonBG = (val: number) =>
    requestType == val
      ? { backgroundColor: "rgba(0,0,0,0.8)" }
      : { backgroundColor: "rgba(0,0,0,0.05)" };
  const handleSubmission = () => {
    props.navigation.navigate(Screens.NewRequestStep2);
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
          {/* Profile Image */}
          <Image
            source={{
              uri: URI,
            }}
            style={s.profileImg}
          />
          <View style={s.card}>
            {/* Background Custom Card */}
            <Card
              preserveAspectRatio="YMin slice"
              width={"100%"}
              height={700}
            />
            <View style={s.cardSub}>
              <Text style={s.heading}>New Request</Text>
              {/* Buttons Container */}
              <View style={s.requestTypeContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setRequestType(1);
                  }}
                  style={[s.requestButton, requestButtonBG(1)]}
                >
                  <View>
                    <View style={s.icon}>
                      <Sun width={22} height={22} />
                    </View>
                    <Text
                      style={{
                        marginTop: 10,
                        color: requestType == 1 ? "white" : "black",
                      }}
                    >
                      Annual
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setRequestType(2);
                  }}
                  style={[s.requestButton, requestButtonBG(2)]}
                >
                  <View>
                    <View style={s.icon}>
                      <Nipple width={22} height={22} />
                    </View>
                    <Text
                      style={{
                        marginTop: 10,
                        color: requestType == 2 ? "white" : "black",
                      }}
                    >
                      Parential
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={s.requestTypeContainer}>
                <TouchableOpacity
                  onPress={() => {
                    setRequestType(3);
                  }}
                  style={[s.requestButton, requestButtonBG(3)]}
                >
                  <View>
                    <View style={s.icon}>
                      <PiggyBank width={22} height={22} />
                    </View>
                    <Text
                      style={{
                        marginTop: 10,
                        color: requestType == 3 ? "white" : "black",
                      }}
                    >
                      Unpaid
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setRequestType(4);
                  }}
                  style={[s.requestButton, requestButtonBG(4)]}
                >
                  <View>
                    <View style={s.icon}>
                      <Fire width={22} height={22} />
                    </View>
                    <Text
                      style={{
                        marginTop: 10,
                        color: requestType == 4 ? "white" : "black",
                      }}
                    >
                      Special
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={s.fromToButton}
                onPress={handleSubmission}
              >
                <Text style={s.fromText}>From</Text>
                {From && (
                  <Text style={s.fromTextValue}>
                    {moment(From, "YYYY-MM-DD").format("Do MMMM YYYY")}
                  </Text>
                )}
              </TouchableOpacity>

              <View style={s.underline} />

              <TouchableOpacity
                style={s.fromToButton}
                onPress={handleSubmission}
              >
                <Text style={s.fromText}>To</Text>
                {To && (
                  <Text style={s.fromTextValue}>
                    {moment(To, "YYYY-MM-DD").format("Do MMMM YYYY")}
                  </Text>
                )}
              </TouchableOpacity>
              <View style={s.underline} />

              <LinearGradient
                // Button Linear Gradient
                colors={["#F1D470", "#E08F4C"]}
                style={s.buttonGradientContainer}
                start={[0.0, 0.5]}
                end={[1.0, 0.5]}
              >
                <TouchableOpacity
                  onPress={() => props.navigation.goBack()}
                  style={s.submitButton}
                >
                  <Text style={s.submitButtonTitle}>Confirm</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default NewRequestStep1;
