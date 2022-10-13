import { StyleSheet } from "react-native";
import { TextStyles } from "../../../theme/TextStyles";
import { hp, wp } from "../../../utils/Helpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(4),
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp(7),
  },
  heading: {
    ...TextStyles.h2,
    fontWeight: "600",
    marginBottom: wp(4),
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
    top: wp(8),
    padding: wp(8),
  },
  requestTypeContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
  },

  requestButton: { flex: 1, borderRadius: 20, padding: wp(4), margin: wp(0.5) },
  icon: {
    backgroundColor: "white",
    padding: wp(1),
    alignSelf: "baseline",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  fromToButton: { marginBottom: wp(1), marginTop: wp(10) },
  fromText: { color: "rgba(0,0,0,0.4)" },
  fromTextValue: { color: "rgba(0,0,0,1)", marginTop: 8 },
  underline: { height: 1, backgroundColor: "rgba(0,0,0,0.05)" },
  buttonGradientContainer: { borderRadius: 20, marginTop: wp(5) },
  submitButton: {
    alignSelf: "stretch",
    marginTop: wp(10),
    borderRadius: 20,
    overflow: "hidden",
  },
  submitButtonTitle: {
    color: "white",
    padding: wp(5),
    paddingHorizontal: 50,
    alignSelf: "center",
  },
});
export default styles;
