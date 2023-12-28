import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useStyles } from './Style';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';
const PricingPlan = () => {
    return <div>
        <Container maxWidth="xl" sx={{ margin: { md: '100px auto', xs: '50px auto' } }}>
            <Typography textAlign="center" sx={{ fontWeight: "bold", fontSize: "48px", lineHeight: "70px", color: "#1b1b1b" }}>
                Pricing Plan
            </Typography>
            <br /> <br />
            <PlanCard />
        </Container>
    </div>;
};

export default PricingPlan;
const ExplorerList = [
    { title: '3 Landmark Projects', },
    { title: '1 Live Broadcasts', },
    { title: '70+ Learning Modules', },
    { title: '3 parent-trainer conference', },
    { title: '4 Accomplishment Badges', },
    { title: 'Explorer Certification', },
]
const Initiator = [
    { title: '6 Landmark Projects', },
    { title: '3 Live Broadcasts', },
    { title: '140+ Learning Modules', },
    { title: '3 parent-trainer conference', },
    { title: '8 Accomplishment Badges', },
    { title: 'Explorer & Initiater Certification', },
    { title: '2 Master Classes', },
    { title: '1 International Conference', },
    { title: '2 Sunday Fundays', },
]
const Leader = [
    { title: '12 Landmark Projects', },
    { title: '6 Live Broadcasts', },
    { title: '280+ Learning Modules', },
    { title: '12 parent-trainer conference', },
    { title: '16 Accomplishment Badges', },
    { title: 'Initiater & Leader Certification', },
    { title: '4 Master Classes', },
    { title: '3 International Conference', },
    { title: '6 Sunday Fundays', },
    { title: 'Kapable Clubs', },
]
const PlanCard = (props) => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.pricing_wrapper} >

                <Box className={classes.PlanCard}>
                    <Typography textAlign="center" sx={{ fontWeight: "600", fontSize: "39px", lineHeight: "59px", color: "#1b1b1b" }}>
                        Explorer
                    </Typography>
                    <Typography gutterBottom textAlign="center" sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1b1b1b" }}>
                        Foundation of 21st Century Skills
                    </Typography>
                    <Typography textAlign="center" sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "28px", color: "#37B57E", background: "rgba(55, 181, 126, 0.2)", borderRadius: "3px", maxWidth: '180px', margin: '10px auto' }}>
                        ₹ 600 Per Session
                    </Typography>
                    <br />
                    <Box className={classes.capsule_btn}  >
                        <Typography textAlign="center" fontWeight="500" flexGrow="1" fontSize="20px" color="#227AEB"  >
                            24 Sessions
                        </Typography>
                        <Typography className={classes.capsule_btn_inner}  >
                            ₹14,400
                        </Typography>
                    </Box>
                    <br />
                    {ExplorerList.map((item, i) => (
                        <Box color="#37B57E" display="flex" alignItems="center" gap="20px" my="10px" >
                            <DoneIcon />
                            <Typography sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "28px", color: "#1b1b1b" }}>
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                    <br /><br />
                    <Box sx={{ marginTop: { md: '150px', xs: '0' } }} />
                    <Link to="book-a-demo" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" size='large' color="primary" sx={{
                            borderRadius: '94px', display: 'block', margin: '0 auto ',
                            "&:hover": {
                                background: "#FA4A5F",
                                color: '#fff', boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.09)"
                            }
                        }}>
                            Buy Now
                        </Button>
                    </Link>
                </Box>
                {/* second card */}
                <Box className={classes.PlanCard}>
                    <Typography textAlign="center" sx={{ fontWeight: "600", fontSize: "39px", lineHeight: "59px", color: "#1b1b1b" }}>
                        Initiator
                    </Typography>
                    <Typography gutterBottom textAlign="center" sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1b1b1b" }}>
                        Application of 21st Century Skills
                    </Typography>
                    <Typography textAlign="center" sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "28px", color: "#37B57E", background: "rgba(55, 181, 126, 0.2)", borderRadius: "3px", maxWidth: '180px', margin: '10px auto' }}>
                        ₹ 500 Per Session
                    </Typography>
                    <br />
                    <Box className={classes.capsule_btn}  >
                        <Typography textAlign="center" fontWeight="500" flexGrow="1" fontSize="20px" color="#227AEB"  >
                            48 Sessions
                        </Typography>
                        <Typography className={classes.capsule_btn_inner}  >
                            ₹24,400
                        </Typography>
                    </Box>
                    <br />
                    {Initiator.map((item, i) => (
                        <Box color="#37B57E" display="flex" alignItems="center" gap="20px" my="10px" >
                            <DoneIcon />
                            <Typography sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "28px", color: "#1b1b1b" }}>
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                    <br /><br />
                    <Box sx={{ marginTop: { md: '35px', xs: '0' } }} />
                    <Link to="book-a-demo" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" size='large' color="primary" sx={{
                            borderRadius: '94px', display: 'block', margin: '0 auto ',
                            "&:hover": {
                                background: "#FA4A5F",
                                color: '#fff', boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.09)"
                            }
                        }}>
                            Buy Now
                        </Button>
                    </Link>
                </Box>
                {/* third card */}
                <Box className={classes.PlanCard}>
                    <Typography textAlign="center" sx={{ fontWeight: "600", fontSize: "39px", lineHeight: "59px", color: "#1b1b1b" }}>
                        Leader
                    </Typography>
                    <Typography gutterBottom textAlign="center" sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1b1b1b" }}>
                        Mastery of 21st Century Skills
                    </Typography>
                    <Typography textAlign="center" sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "28px", color: "#37B57E", background: "rgba(55, 181, 126, 0.2)", borderRadius: "3px", maxWidth: '180px', margin: '10px auto' }}>
                        ₹ 450 Per Session
                    </Typography>
                    <br />
                    <Box className={classes.capsule_btn}  >
                        <Typography textAlign="center" fontWeight="500" flexGrow="1" fontSize="20px" color="#227AEB"  >
                            96 Sessions
                        </Typography>
                        <Typography className={classes.capsule_btn_inner}  >
                            ₹43,200
                        </Typography>
                    </Box>
                    <br />
                    {Leader.map((item, i) => (
                        <Box color="#37B57E" display="flex" alignItems="center" gap="20px" my="10px" >
                            <DoneIcon />
                            <Typography sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "28px", color: "#1b1b1b" }}>
                                {item.title}
                            </Typography>
                        </Box>
                    ))}
                    <br /><br />
                    <Link to="book-a-demo" style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" size='large' color="primary" sx={{
                            borderRadius: '94px', display: 'block', margin: '0 auto ',
                            "&:hover": {
                                background: "#FA4A5F",
                                color: '#fff', boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.09)"
                            }
                        }}>
                            Buy Now
                        </Button>
                    </Link>
                </Box>
            </Box>
        </>

    )
}