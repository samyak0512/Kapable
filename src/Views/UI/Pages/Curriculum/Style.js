import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  boxex: {
    width: "50px",
    height: "50vh",
    background: "red",
    // "&:hover": {
    // },
    // [theme.breakpoints.down(500)]: {
    // },
  },
  arrowBox: {
    border: "1px solid rgba(27, 27, 27, 0.12)",
    boxSizing: "border-box",
    borderRadius: "6px",
    width: "221px",
    height: "154px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor:'pointer',
    [theme.breakpoints.down(600)]: {
      width:'100%'
    },
  },
  arrowBox_inner: {
    width: "187px",
    height: "154px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.06)",
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.down(600)]: {
      width:'100%'
    },
  },
  absolute_div: {
    background: "#FFFFFF",
    boxShadow: "0px 10px 114px rgba(0, 0, 0, 0.08)",
    borderRadius: "10px",
    width: "80%",
    margin: "0 auto",
    height: "auto",
    padding: "50px",
    [theme.breakpoints.down(600)]: {
    padding: "30px",
    width:'70%'
    },
  },
}));
