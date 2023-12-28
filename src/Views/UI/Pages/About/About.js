import React from 'react';
import { Container, Grid, Typography, Box, } from '@mui/material'
import { useStyles } from './Style';
import DemoForm from '../Home/DemoForm'
import { GreyDotsRight, GreyDotsLeft, GreyDotTriangleRight, GreyDotCircleLeft } from '../../Commons/GreyDots'
import OurTeam from './OurTeam';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt'

const About = () => {
    const classes = useStyles();
    return <>
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' } }}>
            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                alignContent="center"
                wrap="wrap"
            >
                <Grid item xl="5" md="5" xs="12" position="relative" >
                    <Box sx={{ marginTop: { md: '100px', xs: '50px' } }} />
                    <Fade left>
                        <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#1b1b1b" }}>
                            We're the
                        </Typography>
                        <Typography sx={{
                            fontWeight: "bold", fontSize: { md: "48px", xs: "31px" },
                            textShadow: "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c"
                            , lineHeight: { md: "70px", xs: '48px' }, color: "#F94A5F"
                        }}>
                            Future Makers
                        </Typography>
                        <br />
                        <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "28px", color: "#1B1B1B" }}>
                            Special curated courses to develop
                            well-rounded individuals for the 21st Century Skills for Kids.
                        </Typography>
                    </Fade>
                </Grid>
                <Grid item xl="5" md="5" xs="12" position="relative" >
                    <Fade bottom>
                        <img src={require("../../../Assets/about/yellowbanner.png")} alt="image_" className='banner_image' />
                    </Fade>
                </Grid>
            </Grid>
        </Container>
        <GreyDotsRight />
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' } }}>
            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                alignContent="center"
                flexWrap="wrap-reverse"
            >
                <Grid item xl="5" md="5" xs="12" >
                    <Tilt className="Tilt" options={{ max: 5, }} >
                        <Fade left>
                            <img src={require("../../../Assets/about/ourvision.png")} alt="image_" className='banner_image' />
                        </Fade>
                    </Tilt>
                </Grid>
                <Grid item xl="6" md="6" xs="12"  >
                    <br /><br /><br />
                    <Fade bottom>
                        <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#F94A5F" }}>
                            Our Vision
                        </Typography>
                        <br />
                        <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "28px", color: "#1B1B1B" }}>
                            To help each child become the best version of themselves.
                        </Typography>
                    </Fade>
                </Grid>
            </Grid>
            <GreyDotsLeft />
            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                py="50px"
            >
                <Grid item xl="6" md="6" xs="12"  >
                    <Box sx={{ marginTop: { md: '50px ', xs: '10px' } }} />
                    <Fade left>
                        <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#227AEB" }}>
                            Our Mission
                        </Typography>
                        <br />
                        <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "28px", color: "#1B1B1B" }}>
                            We empower students across the world to be everything they want to be through our 21st Century Readiness Programs equipping them to be
                            independent thinkers, confident communicators & future leaders.
                        </Typography>
                    </Fade>
                </Grid>
                <Grid item xl="5" md="5" xs="12" >
                    <Fade bottom>
                        <Tilt className="Tilt" options={{ max: 5, }} >
                            <img src={require("../../../Assets/about/ourmission.png")} alt="image_" className='banner_image' />
                        </Tilt>
                    </Fade>
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto', textAlign: 'center', } }}>
            <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#1b1b1" }}>
                Kapable's <span style={{ color: '#FA4A5F' }}> learning shift</span>
            </Typography>
            <br /><br />
            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
                borderRadius="20px"
            >
                <Grid item xl="5" md="5" xs="12" sx={{ padding: { md: '100px 50px ', xs: '50px' } }}
                    className={classes.Treditional}>
                    <br />
                    <Fade bottom>
                        {Treditional.map((item, i) => (
                            <Typography className={`${"list"}${i}`} sx={{
                                fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "40px", color: "#fff",
                                "&:hover": {
                                    transition: '1s',
                                    transform: 'scale(1.2)'
                                }
                            }}>
                                {item.title}
                            </Typography>
                        ))}
                    </Fade >
                    <br /> <br />
                    <Box sx={{ background: '#fff', padding: '10px 30px', position: 'absolute', right: '0', bottom: '30px' }}>
                        <Typography fontSize="25px" fontWeight="500" color="#227AEB" >
                            Traditional Way
                        </Typography>
                    </Box>
                </Grid>
                <Grid sx={{ position: 'absolute', left: '0', right: '0', zIndex: "5" }}>
                    <img src={require("../../../Assets/about/thunder.png")} alt="" />
                </Grid>
                <Grid zIndex="1" item xl="5" md="5" xs="12" sx={{ padding: { md: '100px 50px ', xs: '50px' } }}
                    className={classes.Kapable}>
                    <Box sx={{ background: '#fff', padding: '10px 30px', position: 'absolute', left: '0', top: '30px' }}>
                        <Typography fontSize="25px" fontWeight="500" color="#FA4A5F" >
                            Kapable Way
                        </Typography>
                    </Box>
                    <br /> <br />
                    <Fade bottom>
                        {Kapable.map((item, i) => (
                            <Typography className={`${"list"}${i}`} sx={{
                                fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "40px", color: "#fff",
                                "&:hover": {
                                    transition: '1s',
                                    transform: 'scale(1.2)',
                                }
                            }}>
                                {item.title}
                            </Typography>
                        ))}
                    </Fade >
                    <br />
                </Grid>
            </Grid>
        </Container>
        {/*  */}
        <Box position="relative" sx={{ margin: { md: '100px auto', xs: '50px auto', }, background: '#227AEB', width: '100%', height: 'auto' }}>
            <GreyDotTriangleRight />
            <Container maxWidth="lg" sx={{ padding: { md: '200px 0', xs: '50px 0', } }}>
                <Box display="flex" sx={{ gap: { md: '70px', xs: '50px' } }} justifyContent="center" flexWrap="wrap" alignItems="center">
                    <Fade top>
                        <Typography sx={{ fontWeight: "600", fontSize: { md: "58px", xs: '30px' }, lineHeight: "88px", color: "#FFFFFF" }}>
                            Core Values
                        </Typography>
                    </Fade>
                    {CoreValue.map((item, i) => (
                        <Fade left>
                            <div className="card">
                                <div className="front">
                                    <Box sx={{ background: '#fff', padding: '20px', textAlign: 'center', borderRadius: '20px', }}>
                                        {item.img}
                                        <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: { md: "40px", xs: '20px' }, color: "#1b1b1b" }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </div>
                                <div className="back middle">
                                    <Box sx={{ background: '#fff', padding: '20px', textAlign: 'center', borderRadius: '20px', }}>
                                        {item.img}
                                        <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: { md: "40px", xs: '20px' }, color: "#1b1b1b" }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </Box>
            </Container>
            <GreyDotCircleLeft />
        </Box>
        {/*  */}
        <OurTeam />
        {/*  */}
        <DemoForm />
    </>;
};

export default About;


const Treditional = [
    { title: 'Teacher Centered' },
    { title: 'One Way Transfer' },
    { title: 'Passive Learning' },
    { title: 'Answers are Primary' },
    { title: 'Closed System' },
    { title: 'Emphasis on Facts' },
    { title: 'Assesment on retained knowledge' },
]
const Kapable = [
    { title: 'Learner Centered' },
    { title: 'Multi-Way Transfer' },
    { title: 'Active Learning' },
    { title: 'Questions are Primary' },
    { title: 'Open System' },
    { title: 'Emphasis on Learning' },
    { title: 'Assesment on All Steps of the Process' },
]

const CoreValue = [
    {
        img: <img src={require("../../../Assets/about/Mask Group.png")} alt="" />,
        title: 'Empathy'
    },
    {
        img: <img src={require("../../../Assets/about/Mask Group (1).png")} alt="" />,
        title: 'Passion'
    },
    {
        img: <img src={require("../../../Assets/about/Mask Group (2).png")} alt="" />,
        title: 'Integrity'
    },
    {
        img: <img src={require("../../../Assets/about/Mask Group (3).png")} alt="" />,
        title: 'Value Centricity'
    },
    {
        img: <img src={require("../../../Assets/about/Mask Group (4).png")} alt="" />,
        title: 'Impact'
    },
    {
        img: <img src={require("../../../Assets/about/Mask Group (5).png")} alt="" />,
        title: 'Unity'
    },
]