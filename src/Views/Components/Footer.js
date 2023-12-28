import React from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';
import { Grid, Typography, Box, } from '@mui/material';
import { NavLink } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    Footer: {
        background: "#227AEB",
        width: '100%',
        height: 'auto',
        padding: '30px  0',
        // "&:hover": {
        // },
        [theme.breakpoints.down(500)]: {
        },
    },
}));

const LinkTwo = [
    // {
    //     link: "/",
    //     title: "Community & Clubs"
    // },
    // {
    //     link: "/",
    //     title: "Refer and Earn"
    // },
    {
        link: "/privacy-policy",
        title: "Privacy Policy"
    },
    {
        link: "/careers",
        title: "Hiring"
    },
    {
        link: "/terms-conditions",
        title: "Payments and Refunds"
    },
    {
        link: "/terms-conditions",
        title: "T&C"
    },
    {
        link: "/about-us",
        title: "Team"
    },

]





const LinkOne = [
    {
        link: "/",
        title: "Home"
    },
    {
        link: "/about-us",
        title: "About Us"
    },
    {
        link: "/curriculum",
        title: "Curriculum & Pricing"
    },
    {
        link: "/book-a-demo",
        title: "Book a Demo"
    },
    {
        link: "/careers",
        title: "Become a Trainer"
    },
]
const Footer = () => {
    const classes = useStyles();
    return (
        < >
            {/* <Box sx={{ width: '100%', background: '#227AEB', padding: '30px 0px' }}>
                <Container maxWidth="lg" sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px'
                }}>
                    <Typography variant="h2" sx={{ color: '#FFFFFF', fontSize: { md: '40px', xs: '32px' }, fontWeight: '700', lineHeight: '73px' }}>
                        Start your learning journey with Kapable
                    </Typography>
                    <NavLink to="/book-a-demo" style={{ textDecoration: 'none' }}  >
                        <Button variant="contained" size="large" sx={{ background: '#fff', color: "#227AEB", borderRadius: '26px', "&:hover": { background: '#fff', color: "#227AEB", } }}>
                            Book a Demo
                        </Button>
                    </NavLink>
                </Container>
            </Box>
            <Box sx={{ background: '#227AEB' }}>
                <Container maxWidth="lg" sx={{ background: '#fff' }}>
                    <Divider />
                </Container>
            </Box> */}

            <section id="Footer" className={classes.Footer}  >
                <br />
                <Grid container spacing={2} sx={{ justifyContent: 'space-around', padding: "20px " }}>
                    <Grid item lg={3} md={6} xs={12}>
                        <img src={require("../Assets/home/footerlogo.png")} alt="" />
                        <br /><br />
                        <Typography variant="h3" sx={{ fontSize: '20px', color: '#fff', fontWeight: '500', }}>
                            About Us
                        </Typography>
                        <Typography variant="h3" sx={{ fontSize: '16px', color: '#fff', paddingTop: "10px", lineHeight: '23px', fontWeight: 'normal' }}>
                            Our aim is to enable individuals to be future ready. We strive to empower, inspire and educate our students on 21st Century Skills for Kids. Through our interactive, hands on learning modules we help our students be future ready!
                        </Typography>
                    </Grid>
                    <Grid item lg={2} md={6} xs={12}>
                        {LinkOne.map((item, i) => (
                            <NavLink to={item.link} style={{ textDecoration: 'none' }}  >
                                <Typography variant="h3" sx={{ fontSize: '16px', color: '#fff', paddingTop: "10px", lineHeight: '23px', fontWeight: 'normal' }}>
                                    {item.title}
                                </Typography>
                            </NavLink>
                        ))}
                    </Grid>
                    <Grid item lg={2} md={6} xs={12}>
                        {LinkTwo.map((item, i) => (
                            <NavLink to={item.link} style={{ textDecoration: 'none' }}  >
                                <Typography variant="h3" sx={{ fontSize: '16px', color: '#fff', paddingTop: "10px", lineHeight: '23px', fontWeight: 'normal' }}>
                                    {item.title}
                                </Typography>
                            </NavLink>
                        ))}
                    </Grid>
                    <Grid item lg={2} md={6} xs={12}>
                        <Typography variant="h3" sx={{ fontSize: '20px', color: '#fff', fontWeight: '500', }}>
                            Follow us
                        </Typography>
                        <br />
                        <Box display="flex">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/kapable.club">
                                <img src={require("../Assets/home/fb.png")} alt="icon" style={{ marginLeft: '-15px' }} />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/kapable.club/">
                                <img src={require("../Assets/home/ig.png")} alt="icon" style={{ marginLeft: '-15px' }} />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/26574261/admin/">
                                <img src={require("../Assets/home/in.png")} alt="icon" style={{ marginLeft: '-15px' }} />
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/kapableclub:">
                                <img src={require("../Assets/home/yotube.png")} alt="icon" style={{ marginLeft: '-15px' }} />
                            </a>
                        </Box>
                        <br />
                        <NavLink to="/book-a-demo" style={{ textDecoration: 'none' }}  >
                            <Button variant="contained" sx={{ background: '#fff', color: "#227AEB", borderRadius: '26px', "&:hover": { background: '#fff', color: "#227AEB", } }}>
                                Book a Demo
                            </Button>
                        </NavLink>

                    </Grid>
                </Grid>
            </section>
            <Box sx={{ width: '100%', background: '#227AEB', padding: '30px 0px' }}>
                <Container maxWidth="lg" >
                    <Typography variant="h6" sx={{ color: '#FFFFFF', fontSize: '13px' }}>
                        Copyright ® 2022 Skillup Enterpriese Private Limited . All Rights Reserved.
                    </Typography>
                </Container>
            </Box>
        </ >
    )
}

export default Footer