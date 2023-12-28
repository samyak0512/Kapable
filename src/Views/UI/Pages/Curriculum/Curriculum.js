import React from 'react';
import { Container, Grid, Typography, Box, } from '@mui/material'
import { GreyDotsRight, } from '../../Commons/GreyDots'
import WallOfLove from '../Home/WallOfLove'
import PricingPlan from '../Home/PricingPlan'
import { useStyles } from './Style';
import Skills from './Skills';
import Fade from 'react-reveal/Fade';
import SkillsResponsive from './SkillsResponsive';

const Curriculum = () => {
    const classes = useStyles();
    return <>
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '80px auto' }, }}>
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
                    <Fade left>
                        <Box sx={{ marginTop: { md: '100px', xs: '10px' } }} />
                        <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#1b1b1b" }}>
                            Are your <span style={{ color: '#227AEB' }}>kids ready</span> for the
                        </Typography>
                        <Typography sx={{ textShadow: "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c", fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#F94A5F" }}>
                            21ST CENTURY?
                        </Typography>
                        <br />
                        <Box display="flex" alignItems="center" gap="15px" margin="10px 0">
                            <img src={require("../../../Assets/home/tick-square.png")} alt="image_" />
                            <Typography sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1B1B1B" }}>
                                Thinkable
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="15px" margin="10px 0">
                            <img src={require("../../../Assets/home/tick-square.png")} alt="image_" />
                            <Typography sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1B1B1B" }}>
                                Speakable
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" gap="15px" margin="10px 0">
                            <img src={require("../../../Assets/home/tick-square.png")} alt="image_" />
                            <Typography sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1B1B1B" }}>
                                Workable
                            </Typography>
                        </Box>
                    </Fade>
                </Grid>
                <Grid item xl="6" md="6" xs="12"   >
                    <Fade bottom>
                        <Box sx={{ marginLeft: { md: '-20px', xs: '0' } }}>
                            <img src={require("../../../Assets/curriculum/yellowbanner.png")} alt="image_" className='banner_image' />
                        </Box>
                    </Fade>
                </Grid>
            </Grid>
        </Container>
        {/*  */}
        <Box sx={{ display: { md: 'block', xs: 'none' } }}>
            <Skills />
        </Box>
        {/* this will come in responsive */}
        <Box sx={{ display: { md: 'none', xs: 'block' } }}>
            <SkillsResponsive />
        </Box>
        {/*  */}
        <Box sx={{ display: { md: 'none', xs: 'block' } }}>
            <img src={require("../../../Assets/curriculum/mblcurricluma.svg").default} alt="image_" style={{ width: '100%' }} />
        </Box>
        <Box sx={{ display: { md: 'block', xs: 'none' } }}>
            <img src={require("../../../Assets/curriculum/curriculmwebimg.svg").default} alt="image_" style={{ width: '100%' }} />
        </Box>
        {/* we are hiding this element bcauase of resp issue */}
        <Box sx={{ display: { md: 'none', xs: 'none' } }}>
            {/* hiding complete blok in mobile */}
            <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
                <GreyDotsRight />
                <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#1b1b1b" }}>
                    Make your child Kapable
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                >
                    <Grid item xl="7" lg="7" md="7" xs="12" >
                        <Box display="flex" flexWrap="wrap">
                            {KapableList.map((item, i) => (
                                <Fade left>
                                    <Box display="flex" alignItems="center" maxWidth="350px">
                                        {item.icon}
                                        <Typography sx={{ fontWeight: "500", fontSize: { md: "25px", xs: '20px' }, lineHeight: "32px", color: "#1B1B1B", }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Fade>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xl="5" lg="5" md="5" xs="12" sx={{ display: { md: 'block', xs: 'none' } }}>
                        <Fade>
                            <img src={require("../../../Assets/curriculum/Cartoon Boy Charlie Superhero.G01 1.png")} alt="image_" className='banner_image' />
                        </Fade>
                    </Grid>
                </Grid>
            </Container>
            {/*  */}
            <Box sx={{ background: '#227AEB', width: '100%', height: { md: '140vh', xs: '200vh' }, position: 'relative' }}>
                <Container maxWidth="lg" sx={{ margin: { md: '100px auto 0 auto', xs: '50px auto' }, padding: '50px 0' }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#fff", textAlign: 'center' }}>
                        Methodology
                    </Typography>
                    <br /><br /><br />
                    <Box sx={{ display: { md: 'block', xs: 'none' } }}>
                        <img src={require("../../../Assets/curriculum/circlechart.png")} alt="" style={{ width: '100%' }} />
                    </Box>
                    {/* here we have two images one for mbl and onr for web */}
                    <Box sx={{ display: { md: 'none', xs: 'block' }, textAlign: 'center' }}>
                        <img src={require("../../../Assets/curriculum/circlechartmbl.png")} alt="" style={{ marginLeft: '-20px' }} />
                    </Box>
                </Container>
                <Box className={classes.absolute_div}  >
                    <Fade bottom>
                        <Typography gutterBottom sx={{ fontWeight: "bold", fontSize: "48px", lineHeight: "75px", color: "#1b1b1", textAlign: 'center' }}>
                            Engaging Formats
                        </Typography><br />
                        <Box display="flex" flexWrap="wrap" gap="10px" >
                            {EngagingFormat.map((item, i) => (
                                <Box display="flex" gap="20px" alignItems="center" maxWidth="320px" padding="30px 15px">
                                    {item.icon}
                                    <Typography sx={{ fontWeight: "500", fontSize: { md: "25px", xs: '20px' }, lineHeight: { md: "32px", xs: '20px' }, color: "#1B1B1B", }}>
                                        {item.title}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Fade>
                </Box>
            </Box>
            <Box sx={{
                background: "#FA4A5F", width: '100%', height: 'auto', padding: { md: '250px 0 0 0', xs: '50vh 0 0 0' }, marginBottom: '-100px'
            }}>
                <Box position="relative">
                    <Box sx={{ display: { md: 'block', xs: 'none' } }}>
                        <img src={require("../../../Assets/curriculum/rockettext.png")} alt="" style={{ width: '100%' }} />
                    </Box>
                    {/* here we have two images one for mbl and onr for web */}
                    <Box sx={{ display: { md: 'none', xs: 'block' } }}>
                        <img src={require("../../../Assets/curriculum/rocketmbl.png")} alt="" style={{ width: '100%' }} />
                    </Box>
                    <Box
                        sx={{ background: '#fff', width: '100%', height: { md: '20vh', xs: '5vh' }, position: 'absolute', bottom: '0' }}>
                        {/* to hide the pink bottom of rocket cloud */}
                    </Box>
                </Box>
            </Box>
        </Box>
        {/*  */}
        <WallOfLove />
        {/*  */}
        <PricingPlan />
    </>;
};

export default Curriculum;

const KapableList = [
    {
        title: 'Solve Real-Life Problems',
        icon: <img src={require("../../../Assets/curriculum/whiteicon (1).png")} alt="" />
    },
    {
        title: 'Take Decisions',
        icon: <img src={require("../../../Assets/curriculum/whiteicon (2).png")} alt="" />
    },
    {
        title: 'Develop Innovation Mindset',
        icon: <img src={require("../../../Assets/curriculum/whiteicon (3).png")} alt="" />
    },
    {
        title: 'Make Friends Across The World',
        icon: <img src={require("../../../Assets/curriculum/whiteicon (4).png")} alt="" />
    },
    {
        title: 'Deliver Presentation',
        icon: <img src={require("../../../Assets/curriculum/whiteicon (5).png")} alt="" />
    },
    {
        title: 'Communicate With Confidence',
        icon: <img src={require("../../../Assets/curriculum/whiteicon (6).png")} alt="" />
    },
]
const EngagingFormat = [
    {
        title: 'Mystery Solving Adventures',
        icon: <img src={require("../../../Assets/curriculum/redicon (1).png")} alt="" />
    },
    {
        title: 'Real-World Simulations',
        icon: <img src={require("../../../Assets/curriculum/redicon (2).png")} alt="" />
    },
    {
        title: 'Celebrity Interviews',
        icon: <img src={require("../../../Assets/curriculum/redicon (3).png")} alt="" />
    },
    {
        title: 'Object Thinking Modules',
        icon: <img src={require("../../../Assets/curriculum/redicon (4).png")} alt="" />
    },
    {
        title: 'Reciprocal Teaching',
        icon: <img src={require("../../../Assets/curriculum/redicon (5).png")} alt="" />
    },
    {
        title: 'Design  Thinking',
        icon: <img src={require("../../../Assets/curriculum/redicon (6).png")} alt="" />
    },
]