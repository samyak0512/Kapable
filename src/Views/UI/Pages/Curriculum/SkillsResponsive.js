import React, { useState } from 'react';
import { Container, Typography, Box, } from '@mui/material'
import { useStyles } from './Style';
import Slide from 'react-reveal/Slide';
const SkillsResponsive = () => {
    const classes = useStyles();
    const [literacy, setliteracy] = useState(false)
    const [learning, setLearning] = useState(false)
    const [life, setLife] = useState(false)
    // console.log(literacy)
    return <div>
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
            <Box>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Box className={classes.arrowBox} onClick={() => setliteracy(!literacy)} sx={{ background: "#37B57E", }}>
                        <Typography sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#FFFFFF", }}>
                            Literacy Skills
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: '0',
                        height: "0",
                        borderWidth: "13px  13px 0 13px",
                        borderColor: "#37b57e transparent transparent transparent ",
                        borderStyle: "solid"
                    }} />
                </Box>
                <Box display={literacy ? "block" : "none"}>
                    <Slide bottom>
                        {Literacy.map((item, i) => (
                            <Box className={classes.arrowBox_inner}  >
                                {item.icon}
                                <Typography sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "#1B1B1B", }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Slide>
                </Box>
            </Box><br />
            {/*  */}
            <Box >
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Box className={classes.arrowBox}
                        onClick={() => setLearning(!learning)} sx={{ background: "#F94A5F", }}>
                        <Typography sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#FFFFFF", }}>
                            Learning Skills
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: '0',
                        height: "0",
                        borderWidth: "13px  13px 0 13px",
                        borderColor: "#F94A5F transparent transparent transparent ",
                        borderStyle: "solid"
                    }} />
                </Box>
                <Box display={learning ? "block" : "none"} gap="20px">
                    <Slide bottom>
                        {Learning.map((item, i) => (
                            <Box className={classes.arrowBox_inner}  >
                                {item.icon}
                                <Typography sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "#1B1B1B", }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Slide>
                </Box>
            </Box><br />
            {/*  */}
            <Box >
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Box className={classes.arrowBox}
                        onClick={() => setLife(!life)} sx={{ background: "#227AEB", }}>
                        <Typography sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#FFFFFF", }}>
                            Life Skills
                        </Typography>
                    </Box>
                    <Box sx={{
                        width: '0',
                        height: "0",
                        borderWidth: "13px  13px 0 13px",
                        borderColor: "#227AEB transparent transparent transparent ",
                        borderStyle: "solid"
                    }} />
                </Box>
                <Box display={life ? "block" : "none"} gap="20px">
                    <Slide bottom>
                        {Life.map((item, i) => (
                            <Box className={classes.arrowBox_inner}  >
                                {item.icon}
                                <Typography sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "#1B1B1B", }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Slide>
                </Box>
            </Box>
            {/* <Slide left>
                <Box display="flex" margin="20px 0">
                    <Box display="flex" alignItems="center">
                        <Box className={classes.arrowBox} sx={{ background: "#F94A5F", }}>
                            <Typography sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#FFFFFF", }}>
                                Learning Skills
                            </Typography>
                        </Box>
                        <div class="triangle1"></div>
                    </Box>
                    <Box display="flex" gap="20px">
                        {Learning.map((item, i) => (
                            <Box className={classes.arrowBox_inner}  >
                                {item.icon}
                                <Typography sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "#1B1B1B", }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Slide>
            <Slide left>
                <Box display="flex" margin="20px 0">
                    <Box display="flex" alignItems="center">
                        <Box className={classes.arrowBox} sx={{ background: "#227AEB", }}>
                            <Typography sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#FFFFFF", }}>
                                Life Skills
                            </Typography>
                        </Box>
                        <div class="triangle2"></div>
                    </Box>
                    <Box display="flex" gap="20px">
                        {Life.map((item, i) => (
                            <Box className={classes.arrowBox_inner}  >
                                {item.icon}
                                <Typography sx={{ fontWeight: "400", fontSize: "16px", lineHeight: "25px", color: "#1B1B1B", }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Slide>*/}
        </Container>
    </div>;
};

export default SkillsResponsive;

const Literacy = [
    {
        title: 'Information Literacy',
        icon: <img src={require("../../../Assets/curriculum/greenicon (1).png")} alt="image_" />,
    },
    {
        title: 'Media Literacy',
        icon: <img src={require("../../../Assets/curriculum/greenicon (2).png")} alt="image_" />,
    },
    {
        title: 'Technology Literacy',
        icon: <img src={require("../../../Assets/curriculum/greenicon (3).png")} alt="image_" />,
    }
]

const Learning = [
    {
        title: 'Critical Thinking',
        icon: <img src={require("../../../Assets/curriculum/redicon (3).png")} alt="image_" />
    },
    {
        title: 'Creativity',
        icon: <img src={require("../../../Assets/curriculum/redicon (4).png")} alt="image_" />
    },
    {
        title: 'Collaboration',
        icon: <img src={require("../../../Assets/curriculum/redicon (5).png")} alt="image_" />
    },
    {
        title: 'Communication',
        icon: <img src={require("../../../Assets/curriculum/redicon (6).png")} alt="image_" />
    },
]
const Life = [
    {
        title: 'Flexibility',
        icon: <img src={require("../../../Assets/curriculum/blueicon (1).png")} alt="image_" />
    },
    {
        title: 'Leadership',
        icon: <img src={require("../../../Assets/curriculum/blueicon (2).png")} alt="image_" />
    },
    {
        title: 'Initiative',
        icon: <img src={require("../../../Assets/curriculum/blueicon (3).png")} alt="image_" />
    },
    {
        title: 'Productivity',
        icon: <img src={require("../../../Assets/curriculum/blueicon (4).png")} alt="image_" />
    },
    {
        title: 'Social Skills',
        icon: <img src={require("../../../Assets/curriculum/blueicon (1).png")} alt="image_" />
    },
]
