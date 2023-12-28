import React from 'react';
import { Container, Grid, Typography, Box, Pagination } from '@mui/material'
import BlogCard from './BlogCard';
import Slide from 'react-reveal/Slide';
import { GreyDotsLeft, GreyDotsRight } from '../../Commons/GreyDots'
const Blogs = () => {
    return <>
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
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
                    <Slide left>
                        <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#227AEB" }}>
                            Blog and Stories of
                        </Typography>
                        <Typography sx={{ textShadow: "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c", fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#F94A5F" }}>
                            Kapable
                        </Typography>
                        <br />
                        <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: "16px" }, lineHeight: "28px", color: " rgba(27, 27, 27, 0.8)" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt turpis tempus porttitor.
                        </Typography>
                    </Slide>
                </Grid>
                <Grid item xl="6" md="6" xs="12"   >
                    <Slide bottom>
                        <img src={require("../../../Assets/blogs/yellowbanner.png")} alt="image_" className='banner_image' />
                    </Slide>
                </Grid>
            </Grid>
            <GreyDotsLeft />
        </Container>
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, display: "flex", justifyContent: 'space-between', flexWrap: 'wrap', }}>
            <img src={require("../../../Assets/blogs/Group 453.png")} alt="blogs" style={{ maxWidth: '786px', height: 'auto' }} className='banner_image' />
            <BlogCard />
        </Container>

        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
            <GreyDotsRight />
            <Box sx={{ maxHeight: '100vh',overflow:'scroll' }}>
                <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                    {new Array(900).fill("").map((_, i) => (
                        <BlogCard />
                    ))}
                </Box>
            </Box>
            <br />  <br /><br />
            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                <Pagination count={10} color="primary" />
            </Box>
        </Container>
    </>;
};

export default Blogs;
