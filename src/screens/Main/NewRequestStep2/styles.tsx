import { StyleSheet } from "react-native";
import { TextStyles } from "../../../theme/TextStyles";
import { hp, wp } from "../../../utils/Helpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(2),
  },
  heading: {
    ...TextStyles.h2,
    fontWeight: "600",
    marginBottom: 30,
  },
  profileImg: { width: wp(30), height: wp(30), borderRadius: 100 },
  card: {
    alignSelf: "stretch",
    borderRadius: 20,
    marginTop: -hp(3),
    overflow: "hidden",
  },
  cardSub: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: hp(4),
    padding: wp(6),
    justifyContent: "center",
  },

  buttonGradientContainer: { borderRadius: 20, marginTop: 70 },
  submitButton: {
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: wp(10),
    borderRadius: 20,
    overflow: "hidden",
  },
  submitButtonTitle: {
    color: "white",
    padding: wp(5),
    paddingHorizontal: 50,
  },
  calenderContainer: { height: hp(40) },
});
export default styles;
