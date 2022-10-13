import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Calender from "../../../components/Calender";
import { useDispatch } from "react-redux";
import { newRequestAction } from "../../../redux/slices/common";
import Card from "./../../../../assets/shapes/CurvedGround.svg";
import s from "./styles";
import { colors } from "../../../theme/Colors";
import { hp, wp } from "../../../utils/Helpers";
const URI =
  "https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U";
const NewRequestStep2 = (props: { navigation: { goBack: () => void } }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [markedDates, setMarkedDates]: any = useState({});
  const dispatch = useDispatch();

  var getDaysArray = function (
    start: string | number | Date,
    end: string | number | Date
  ) {
    for (
      var arr = [], dt = new Date(start);
      dt <= new Date(end);
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt).toISOString().slice(0, 10));
    }
    return arr;
  };
  const generateMarkDates = (
    sd: string | number | Date,
    ed: string | number | Date
  ) => {
    var md = {};
    var daylist = getDaysArray(new Date(sd), new Date(ed));

    daylist.forEach((val, index) => {
      if (index == 0) {
        md[val] = {
          startingDay: true,
          color: colors.SelectedDate,
          textColor: "white",
        };
      } else if (index == daylist.length - 1) {
        md[val] = {
          endingDay: true,
          color: colors.SelectedDate,
          textColor: "white",
        };
      } else {
        md[val] = { color: colors.SelectedDateArea, textColor: "black" };
      }
    });
    return md;
  };
  // dateString is selected date by user on calender
  const onDayPress = (val: { dateString: string | number | Date | any }) => {
    // Handling the state if nothing is selected on calender and then setting the start date with user's selection with end date of day +1 of user's selected dated
    if (!startDate) {
      var date = new Date(val.dateString);
      date.setDate(date.getDate() + 1);
      setStartDate(val.dateString);
      setEndDate(date.toISOString().slice(0, 10));

      const md = generateMarkDates(
        val.dateString,
        date.toISOString().slice(0, 10)
      );
      setMarkedDates(md);
    }
    // Handling state if selected date is less than start date then we are converting the end date into start date and start date will be user's selected date
    else if (
      new Date(val.dateString).getTime() < new Date(startDate).getTime()
    ) {
      setStartDate(val.dateString);
      setEndDate(startDate);
      const md = generateMarkDates(val.dateString, startDate);
      setMarkedDates(md);
    }
    //  We are clearing the calender here if user touches the area of selected dates
    else if (val?.dateString in markedDates) {
      setStartDate(null);
      setEndDate(null);
      setMarkedDates({});
    }
    //  Handling state if selected date is bigger than start date then we are converting the end date into selected date and start date will remain as it is.
    else {
      setEndDate(val?.dateString);
      const md = generateMarkDates(startDate, val.dateString);
      setMarkedDates(md);
    }
  };

  const handleSubmission = () => {
    dispatch(
      newRequestAction({
        Available: Object.keys(markedDates).length,
        Used: 30 - Object.keys(markedDates).length,
        To: endDate,
        From: startDate,
      })
    );
    props.navigation.goBack();
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
              preserveAspectRatio="YMin slice"
              width={"100%"}
              height={wp(160)}
            />
            <View style={s.cardSub}>
              <Text style={s.heading}>New Request</Text>
              {/* Buttons Container */}
              <View style={s.calenderContainer}>
                <Calender onDayPress={onDayPress} markedDates={markedDates} />
              </View>
              <TouchableOpacity
                onPress={handleSubmission}
                style={s.submitButton}
              >
                <LinearGradient
                  // Button Linear Gradient
                  colors={["#F1D470", "#E08F4C"]}
                  start={[0.0, 0.5]}
                  end={[1.0, 0.5]}
                >
                  <Text style={s.submitButtonTitle}>Select</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default NewRequestStep2;
