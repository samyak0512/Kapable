import React from 'react';
import { Container, Grid, Typography, Box, Button, } from '@mui/material'
import { useStyles } from './Style';
import { GreyDotsRight, GreyDotsLeft } from '../../Commons/GreyDots';
import PricingPlan from './PricingPlan';
import Faqs from './Faqs';
import DemoForm from './DemoForm';
import WallOfLove from './WallOfLove';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import TextTicker from './TextTicker';
import Tilt from 'react-tilt'
import { Link } from 'react-router-dom';
const Home = () => {
  const classes = useStyles();
  return <>
    <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' } }}>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        alignContent="flex-start"
        wrap="wrap"
      >
        <Grid item xl="5" md="5" xs="12" position="relative" >
          <Fade left>
            <Box sx={{ marginTop: { md: '100px', xs: '50px' } }} />
            <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#227AEB" }}>
              Empower <span style={{ color: '#000' }}> your child with the</span>
            </Typography>
            <Typography sx={{
              fontWeight: "bold", fontSize: { md: "48px", xs: "31px" },
              textShadow: "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c"
              , lineHeight: { md: "70px", xs: '48px' }, color: "#F94A5F"
            }}>
              Cape of Confidence
            </Typography>
            {/* <h2 className='text_stroke'>
          Cape of Confidence
          </h2> */}
            <br />
            <Box display="flex" alignItems="center" gap="15px" margin="10px 0">
              <img src={require("../../../Assets/home/tick-square.png")} alt="image_" />
              <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "28px", color: "#1B1B1B" }}>
                4-14 years
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="15px" margin="10px 0">
              <img src={require("../../../Assets/home/tick-square.png")} alt="image_" />
              <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "28px", color: "#1B1B1B" }}>
                21st Century Skills
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap="15px" margin="10px 0">
              <img src={require("../../../Assets/home/tick-square.png")} alt="image_" />
              <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "28px", color: "#1B1B1B" }}>
                Live Online Classes
              </Typography>
            </Box>
            <br /> <br />
            <Link to="/book-a-demo" style={{ textDecoration: 'none' }}>
              <Button variant="contained" size="large" color="primary" sx={{ borderRadius: "94px" }}>
                Book a Demo
              </Button>
            </Link>
          </Fade>
        </Grid>
        <Grid item xl="5" md="5" xs="12" position="relative" >
          <Box className={classes.home_img}>
            <img src={require("../../../Assets/home/Group 622.png")} alt="image_" className='banner_image' />
          </Box>
        </Grid>
        {/* <Box className={classes.home_img}>
          <Fade bottom>
            <img src={require("../../../Assets/home/Group 674.png")} alt="image_" className='banner_image' />
          </Fade>
        </Box> */}
      </Grid>
    </Container>

    {/* second section */}
    <Container maxWidth="lg" sx={{ margin: { md: '200px auto', xs: '50px auto' } }}>
      <GreyDotsRight />
      <Slide bottom>
        <Box sx={{ display: 'flex', justifyContent: 'center',gap:'10px', flexWrap: 'wrap' }}>
          <Typography textAlign="center" sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#1B1B1B" }}>
            Experience learning that is
          </Typography>
          <Box sx={{ width: '300px',}}> <TextTicker /></Box>
        </Box>
      </Slide>
      <br /><br />
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        flexWrap="wrap-reverse"
        py="50px"
      >
        <Grid item xl="6" md="6" xs="12" >
          <Slide left>
            <Tilt className="Tilt" options={{ max: 5, }} >
              <img src={require("../../../Assets/home/thinkable.png")} alt="image_" className='banner_image' />
            </Tilt>
          </Slide>
        </Grid>
        <Grid item xl="5" md="5" xs="12"  >
          <Slide bottom>
            <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#F94A5F" }}>
              Thinkable
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "32px", color: "#565656" }}>
              Where kids become independent thinkers.
            </Typography>
            <br />
            {ThinkAble.map((item, i) => (
              <Box className={classes.listContainer}>
                <Box display="flex" alignItems="flex-end">
                  <Box className={classes.sqaureBox}>{item.count}</Box>
                  <div className="thinkable_triangle" />
                </Box>
                <Typography variant="body1" color="#1B1B1B">{item.title}</Typography>
              </Box>
            ))}
          </Slide>
        </Grid>
      </Grid>
      {/*  */}
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
        <Grid item xl="5" md="5" xs="12"  >
          <Slide bottom>
            <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#37B57E" }}>
              Speakable
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "32px", color: "rgba(27, 27, 27, 0.6)" }}>
              Where kids to learn to express confidently.
            </Typography>
            <br />
            {Speakable.map((item, i) => (
              <Box className={classes.listContainer_speak}>
                <Box display="flex" alignItems="flex-end">
                  <Box className={classes.sqaureBox_speak}>{item.count}</Box>
                  <div className="speakable_triangle" />
                </Box>
                <Typography variant="body1" color="#1B1B1B">{item.title}</Typography>
              </Box>
            ))}
          </Slide>
        </Grid>
        <Grid item xl="5" md="5" xs="12" >
          <Slide bottom>
            <Tilt className="Tilt" options={{ max: 5, }} >
              <img src={require("../../../Assets/home/speakable.png")} alt="image_" className='banner_image' />
            </Tilt>
          </Slide>
        </Grid>
      </Grid>
      {/*  */}
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="center"
        flexWrap="wrap-reverse"
        py="50px"
      >
        <Grid item xl="6" md="6" xs="12" >
          <GreyDotsLeft />
          <Slide left>
            <Tilt className="Tilt" options={{ max: 5, }} >
              <img src={require("../../../Assets/home/workable.png")} alt="image_" className='banner_image' />
            </Tilt>
          </Slide>
        </Grid>
        <Grid item xl="5" md="5" xs="12"  >
          <Slide bottom>
            <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#227AEB" }}>
              Workable
            </Typography>
            <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "32px", color: "rgba(27, 27, 27, 0.6)" }}>
              Where kids become collaborators and future leaders.
            </Typography>
            <br />
            {workable.map((item, i) => (
              <Box className={classes.listContainer_work}>
                <Box display="flex" alignItems="flex-end">
                  <Box className={classes.sqaureBox_work}>{item.count}</Box>
                  <div className="workable_triangle" />
                </Box>
                <Typography variant="body1" color="#1B1B1B">{item.title}</Typography>
              </Box>
            ))}
          </Slide>
        </Grid>
      </Grid>
    </Container>

    {/*  */}

    <Box sx={{ margin: { md: '-150px 0', xs: '10px' }, }}>
      <img src={require("../../../Assets/home/rocketbg2.png")} alt="rocektsbg" style={{ width: '100%' }} />
    </Box>

    {/*  */}
    <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, display: { md: 'none', xs: 'block' } }}>
      <img src={require("../../../Assets/home/kapableway.png")} alt="rocektsbg" style={{ width: '100%' }} />
    </Container>
    <div style={{ position: "relative" }}>
      <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, display: { md: 'block', xs: 'none' } }}>
        <GreyDotsRight />
        <Typography textAlign="center" sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: "70px", color: "#1B1B1B" }}>
          The Kapable Way
        </Typography>
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          <Grid item xl="2" md="2" xs="12" zIndex="5">
            <Box sx={{ marginLeft: '-100px', }}>
              <Fade>
                <img src={require("../../../Assets/home/Cartoon Boy Charlie Superhero.G01 1.png")} alt="Boy" className='banner_image' />
              </Fade>
            </Box>
          </Grid>
          <Grid item xl="9" md="9" xs="12" zIndex="5">
            <Box display="flex" alignItems="center">
              <div>
                <Slide left>
                  <img src={require("../../../Assets/home/Group 23.png")} alt="image_" style={{ margin: '-20px' }} />
                </Slide>
              </div>
              <div>
                <Slide top>
                  <img src={require("../../../Assets/home/Group 24.png")} alt="image_" style={{ margin: '-20px' }} />
                </Slide>
                <Slide bottom>
                  <img src={require("../../../Assets/home/Group 25.png")} alt="image_" style={{ margin: '-20px' }} />
                </Slide>
              </div>
              <div>
                <Slide top>
                  <img src={require("../../../Assets/home/Group 28.png")} alt="image_" style={{ margin: '-20px' }} />
                </Slide>
                <Slide right>
                  <img src={require("../../../Assets/home/Group 26.png")} alt="image_" style={{ margin: '-20px' }} />
                </Slide>
                <Slide bottom>
                  <img src={require("../../../Assets/home/Group 27.png")} alt="image_" style={{ margin: '-20px' }} />
                </Slide>
              </div>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ position: 'absolute', right: '0', top: '200px', zIndex: '1' }}>
          <img src={require("../../../Assets/home/Rectangle 300.png")} width='100%' alt="image_" />
        </Box>
      </Container>
    </div>
    {/*  */}
    <WallOfLove />
    {/*  */}
    <PricingPlan />
    {/*  */}
    <Faqs />
    {/*  */}
    <DemoForm />
  </>;
};

export default Home;

const ThinkAble = [
  {
    count: '01',
    title: 'Logical Reasoning'
  },
  {
    count: '02',
    title: 'Decision Making'
  },
  {
    count: '03',
    title: 'Problem Solving'
  },
  {
    count: '04',
    title: 'Analysis'
  },
  {
    count: '05',
    title: 'Design Thinking'
  },
]

const Speakable = [
  {
    count: '01',
    title: 'Public Speaking'
  },
  {
    count: '02',
    title: 'Theatre & Improv'
  },
  {
    count: '03',
    title: 'Vocabulary & Grammer'
  },
  {
    count: '04',
    title: 'Presentation Skills'
  },
  {
    count: '05',
    title: 'Articulation'
  },
]
const workable = [
  {
    count: '01',
    title: 'Entrepreneurship'
  },
  {
    count: '02',
    title: 'Simulations'
  },
  {
    count: '03',
    title: 'Productivity'
  },
  {
    count: '04',
    title: 'Social & Emotional Literacy'
  },
  {
    count: '05',
    title: 'Life Skills'
  },
]