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
  cardHeading: { fontSize: 24, fontWeight: "600" },
  profileImg: { width: 100, height: 100, borderRadius: 100 },
  card: {
    alignSelf: "stretch",
    borderRadius: 20,
    marginTop: -20,
    overflow: "hidden",
  },
  cardSub: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 10,
    padding: 25,
    justifyContent: "center",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardSubHeading: {
    fontSize: 14,
    marginTop: 5,
    color: "rgba(0,0,0,0.4)",
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    marginVertical: 20,
  },
  cardFooter: { flexDirection: "row", justifyContent: "space-evenly" },
  cardFooterBox: { justifyContent: "center", alignItems: "center" },
  cardFooterBoxTitle: { fontSize: 14, color: "rgba(0,0,0,0.4)" },
  cardFooterBoxSubTitle: {
    fontSize: 10,
    marginTop: 2,
    color: "rgba(0,0,0,1)",
  },
  cardFooterDivider: {
    height: 20,
    backgroundColor: "rgba(0,0,0,0.1)",
    width: 1,
  },
});
export default styles;
