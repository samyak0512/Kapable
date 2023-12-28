import React from 'react';
import { useStyles } from './Style';
import { Container, Grid, Typography, Box, } from '@mui/material'
import Slider from "react-slick";

const WallOfLove = () => {
    const classes = useStyles();
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        cssEase: "linear",
    };
    return <div >
        <Box className={classes.wall_of_love}>

            <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    alignContent="center"
                    wrap="wrap"
                >
                    <Grid item xl="4" md="4" xs="12" >
                        <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#1B1B1B" }}>
                            Wall of L
                            <img src={require("../../../Assets/home/heart.png")} alt="image_" />
                            ve
                        </Typography>
                        <br /><br />
                        <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "180%", color: "#1B1B1B" }}>
                            "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it.”
                        </Typography>
                        <br /><br />
                        <Typography sx={{ px: '20px', fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "30px", color: "#1B1B1B" }}>
                            - Nirav Parmar
                        </Typography>
                    </Grid>
                    <Grid item xl="6" md="6" xs="12" >
                        <Slider {...settings}>
                            {Embed.map((item, i) => (
                                <>
                                    {item.iframe}
                                </>
                            ))}
                        </Slider>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </div >;
};

export default WallOfLove;

const Embed = [
    { iframe: <iframe width="100%" height="315" src="https://www.youtube.com/embed/i-C34enYOts?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { iframe: <iframe width="100%" height="315" src="https://www.youtube.com/embed/YMxTZRGztmc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { iframe: <iframe width="100%" height="315" src="https://www.youtube.com/embed/Tem9zxatoSM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { iframe: <iframe width="100%" height="315" src="https://www.youtube.com/embed/erACXQXE7Kg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { iframe: <iframe width="100%" height="315" src="https://www.youtube.com/embed/qmUPB7f8J7o?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { iframe: <iframe width="100%" height="315" src="https://www.youtube.com/embed/txSQTz9vOCs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { iframe: <iframe width="100%" height="315" src="https://www.youtube.com/embed/epTX02VUWCo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { iframe: <iframe width="100%" height="315" src="https://www.youtube.com/embed/QX2zS_ue81U?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { iframe: <iframe width="100%" height="315" src="https://www.youtube.com/embed/0wES7--YiTg?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
    { iframe: <iframe width="100%" height="315" src="https://www.youtube.com/embed/mGJDCm6vDPU?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> },
]