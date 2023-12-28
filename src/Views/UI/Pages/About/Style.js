import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    boxex: {
        // "&:hover": {
        // },
        // [theme.breakpoints.down(500)]: {
        // },
    },
    Treditional: {
        transform: "skew(-15deg)",
        background: "#227AEB",
        position: "relative",
        borderRadius: "20px 0 0 20px",
        [theme.breakpoints.down(1000)]: {
            borderRadius: "20px",
            transform: "skew(0deg)",
        },
    },
    Kapable: {
        transform: "skew(-15deg)",
        background: "#FA4A5F",
        position: "relative",
        borderRadius: "0 20px 20px 0",
        [theme.breakpoints.down(1000)]: {
            borderRadius: "20px",
            transform: "skew(0deg)",
        },
    },
}));
