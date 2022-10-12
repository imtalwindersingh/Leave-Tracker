import { StyleSheet } from "react-native";
import { TextStyles } from "../../../theme/TextStyles";
import { wp } from "../../../utils/Helpers";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  heading: {
    ...TextStyles.h2,
    fontWeight: "600",
    marginBottom: 30,
  },
  profileImg: { width: 100, height: 100, borderRadius: 100 },
  card: {
    alignSelf: "stretch",
    borderRadius: 20,
    marginTop: -25,
    overflow: "hidden",
  },
  cardSub: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 25,
    padding: 25,
    justifyContent: "center",
  },
  requestTypeContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
  },

  requestButton: { flex: 1, borderRadius: 20, padding: 20, margin: 2 },
  icon: {
    backgroundColor: "white",
    padding: 8,
    alignSelf: "baseline",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  fromToButton: { marginBottom: 10, marginTop: 40 },
  fromText: { color: "rgba(0,0,0,0.4)" },
  fromTextValue: { color: "rgba(0,0,0,1)", marginTop: 8 },
  underline: { height: 1, backgroundColor: "rgba(0,0,0,0.05)" },
  buttonGradientContainer: { borderRadius: 20, marginTop: 70 },
  submitButton: {
    padding: 20,
    alignItems: "center",
  },
  submitButtonTitle: { color: "white" },
});
export default styles;
