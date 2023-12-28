import * as React from 'react';
import Button from '@mui/material/Button'
import { NavLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Drawer,
    useTheme,
    useMediaQuery,
    IconButton,
    Box, Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';




const useStyles = makeStyles((theme) => ({

    hamburger: {
        color: "white",
        marginLeft: "auto",
    },
    sidedrawer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        rowGap: "3rem",
        padding: "2rem",
        width: "70vw",
        height: "100vh",
        // background: "#F23A5E",
        position: "relative",
        // padding: "10px 0 0 3rem",
    },
    closeIcon: {
        width: "3rem",
        height: "3rem",
        marginLeft: "auto",
        position: "absolute",
        right: "1rem",
        top: "1rem",
        cursor: "pointer",
        color: '#227AEB'
    },
    navLinks: {
        fontWeight: 700,
        fontSize: "20px",
        lineHeight: "22px",
        color: "#1B1B1B",
        cursor: 'pointer',
        borderRadius: "10px",
        padding: '10px 20px',
        textAlign: 'center',
        marginRight: '15px',
        "&:hover": {
            background: "rgba(34, 122, 235, 0.2)",
            transition: '1s'
        },
    },
}));

const MenuLink = [
    {
        link: '/',
        title: 'Home'
    },
    {
        link: '/about-us',
        title: 'About Us'
    },
    // {
    //     link: '/curriculum ',
    //     title: 'Curriculum '
    // },
    // {
    //     link: '/careers',
    //     title: 'Careers'
    // },
    // {
    //     link: '/blog',
    //     title: 'Blog'
    // },
    // {
    //     link: '/contact-us',
    //     title: 'Contact Us'
    // },
]


export default function Header() {
    const classes = useStyles();
    const theme = useTheme();
    // const history = useHistory();
    const isMobile = useMediaQuery(theme.breakpoints.down(1250));

    const [open, setOpen] = useState(false);
    const handleDrawer = (bool) => () => {
        setOpen(bool);
    };

    return (
        <>
            <AppBar position="fixed" component="header" style={{
                padding: '10px',
                background: '#fff',
                boxShadow: 'none',
            }} >
                <Toolbar >
                    <Box sx={{ flexGrow: 1 }}>
                        <NavLink to="/" style={{ textDecoration: "none" }}>
                            <img src={require("../Assets/home/coloredlogo.png")} alt="logo" />
                        </NavLink>
                    </Box>

                    {!isMobile && (

                        <Toolbar  >
                            {MenuLink.map((item, _i) => (
                                (<>
                                    <NavLink to={item.link} className={classes.navLinks}
                                        style={({ isActive }) => {
                                            return {
                                                textDecoration: 'none',
                                                borderRadius: '0',
                                                color: isActive ? "#227AEB" : "",
                                                borderBottom: isActive ? "2px solid #227AEB" : "",
                                            };
                                        }}
                                    >
                                        <Typography ><b>{item.title}</b></Typography>
                                    </NavLink>
                                </>)
                            ))}
                            <NavLink to="/curriculum" className={classes.navLinks}
                                style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        borderRadius: '0',
                                        color: isActive ? "#227AEB" : "",
                                        borderBottom: isActive ? "2px solid #227AEB" : "",
                                    };
                                }}
                            >
                                <Typography ><b>Curriculum</b></Typography>
                            </NavLink>
                            <NavLink to="/careers" className={classes.navLinks}
                                style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        borderRadius: '0',
                                        color: isActive ? "#227AEB" : "",
                                        borderBottom: isActive ? "2px solid #227AEB" : "",
                                    };
                                }}
                            >
                                <Typography ><b>Careers</b></Typography>
                            </NavLink>
                            <NavLink to="/contact-us" className={classes.navLinks}
                                style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        borderRadius: '0',
                                        color: isActive ? "#227AEB" : "",
                                        borderBottom: isActive ? "2px solid #227AEB" : "",
                                    };
                                }}
                            >
                                <Typography ><b>Contact Us</b></Typography>
                            </NavLink>
                            <NavLink to="/book-a-demo" style={{ textDecoration: "none" }}>
                                <Button variant="contained" sx={{ ml: 20, borderRadius: '26px', background: '#227AEB', "&:hover": { background: '#227AEB', color: "#fff", } }}>
                                    Book a Demo
                                </Button>
                            </NavLink>
                        </Toolbar>
                    )}

                    {isMobile && (
                        <IconButton
                            className={classes.hamburger}
                            onClick={handleDrawer(true)}
                        >
                            <MenuIcon style={{ color: '#227AEB' }} />
                        </IconButton>
                    )}
                </Toolbar>

            </AppBar>
            <Drawer
                anchor="right"
                onClose={handleDrawer(false)}
                open={isMobile && open}
            >
                <Box className={classes.sidedrawer}>
                    <CloseIcon className={classes.closeIcon} onClick={handleDrawer(false)} />
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                        <img src={require("../Assets/home/coloredlogo.png")} alt="logo" />
                    </NavLink>
                    {MenuLink.map((item, _i) => (
                        (<>
                            <NavLink to={item.link} className={classes.navLinks} onClick={handleDrawer(false)}
                                style={({ isActive }) => {
                                    return {
                                        textDecoration: 'none',
                                        borderRadius: '0',
                                        color: isActive ? "#227AEB" : "",
                                        borderBottom: isActive ? "2px solid #227AEB" : "",
                                    };
                                }}
                            >
                                <Typography ><b>{item.title}</b></Typography>
                            </NavLink>
                        </>)
                    ))}
                    <NavLink to="/curriculum" className={classes.navLinks} onClick={handleDrawer(false)}
                        style={({ isActive }) => {
                            return {
                                textDecoration: 'none',
                                borderRadius: '0',
                                color: isActive ? "#227AEB" : "",
                                borderBottom: isActive ? "2px solid #227AEB" : "",
                            };
                        }}
                    >
                        <Typography ><b>Curriculum</b></Typography>
                    </NavLink>
                    <NavLink to="/careers" className={classes.navLinks} onClick={handleDrawer(false)}
                        style={({ isActive }) => {
                            return {
                                textDecoration: 'none',
                                borderRadius: '0',
                                color: isActive ? "#227AEB" : "",
                                borderBottom: isActive ? "2px solid #227AEB" : "",
                            };
                        }}
                    >
                        <Typography ><b>Careers</b></Typography>
                    </NavLink>
                    <NavLink to="/contact-us" className={classes.navLinks} onClick={handleDrawer(false)}
                        style={({ isActive }) => {
                            return {
                                textDecoration: 'none',
                                borderRadius: '0',
                                color: isActive ? "#227AEB" : "",
                                borderBottom: isActive ? "2px solid #227AEB" : "",
                            };
                        }}
                    >
                        <Typography ><b>Contact Us</b></Typography>
                    </NavLink>
                    <NavLink to="/book-a-demo" onClick={handleDrawer(false)} style={{ textDecoration: "none" }}>
                        <Button variant="contained" sx={{ borderRadius: '26px', background: '#227AEB', "&:hover": { background: '#227AEB', color: "#fff", } }}>
                            Book a Demo
                        </Button>
                    </NavLink>
                </Box>
            </Drawer>
        </>
    );
}