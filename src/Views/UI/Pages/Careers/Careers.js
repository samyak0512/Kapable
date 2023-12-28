import React from 'react';
import { Container, Grid, Typography, Box, Button, } from '@mui/material'
import { BabyPink } from '../../Commons/GreyDots';
import { GreyDotsRight, } from '../../Commons/GreyDots'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import JobData from './db';
const Careers = () => {
    return <>
        <Container maxWidth="lg" sx={{ margin: '100px auto' }}>
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
                    <Box sx={{ marginTop: { md: '100px', xs: '10px' } }} />
                    <Fade left>
                        <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#227AEB" }}>
                            Explore a Career at
                        </Typography>
                        <Typography sx={{ fontWeight: "bold", fontSize: { md: "58px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#F94A5F" }}>
                            Kapable
                        </Typography>
                    </Fade>
                </Grid>
                <Grid item xl="6" md="6" xs="12"   >
                    <Fade bottom>
                        <img src={require("../../../Assets/careers/yellowbanner.png")} alt="image_" className='banner_image' />
                    </Fade>
                </Grid>
            </Grid>
        </Container>
        <GreyDotsRight />
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
            <Typography textAlign="center" position="relative"
                sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#1b1b1b" }}>
                Current Job Positions
                <BabyPink />
            </Typography>
            <br />
            <Box textAlign="center" sx={{ width: { md: '80%', xs: '100%' }, margin: '0 auto' }}>
                <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: "16px" }, lineHeight: "28px", color: " rgba(27, 27, 27, 0.8)" }}>
                    We at Kapable are looking for hustlers, firefighters & change makers wanting to make an impact on the education system!
                    If you are someone who loves a challenge & have what it takes to go above & beyond to get the work done, let's catch up!
                </Typography>
            </Box>
            <br /><br />
            <Box display="flex" justifyContent="center" gap="20px" flexWrap='wrap'  >
                {JobData.map((item, i) => (
                    <Fade bottom>
                        <Box>
                            <Box sx={{
                                width: { md: "387px", xs: '100%' },
                                height:{md:"430px",xs:'auto'},
                                background: "rgba(27, 27, 27, 0.02)",
                                borderRadius: "10px",
                            }}>
                                <Box padding="40px">
                                    <Typography sx={{ fontWeight: "500", fontSize: "25px", lineHeight: "28px", color: "#1B1B1B" }}>
                                        {item.title}
                                    </Typography>
                                    <br />
                                    <Typography sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "28px", color: "rgba(27, 27, 27, 0.6)" }}>
                                        {item.shortDesc}
                                    </Typography>
                                    <br />
                                    <Typography sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "28px", color: "#FA4A5F" }}>
                                        Full-time
                                    </Typography>
                                    <br />
                                    <Link to={`/careers/job-details/${item.id}`} style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" color="primary" sx={{ borderRadius: '94px', }} >
                                            View Details
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Fade>
                ))}
            </Box>
        </Container>
    </>;
};

export default Careers;
