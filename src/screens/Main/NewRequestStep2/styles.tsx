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

  buttonGradientContainer: { borderRadius: 20, marginTop: 70 },
  submitButton: {
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  submitButtonTitle: {
    color: "white",
    padding: 20,
    paddingHorizontal: 50,
  },
  calenderContainer: { height: wp(100) },
});
export default styles;
