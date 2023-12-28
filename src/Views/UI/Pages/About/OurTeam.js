import React from 'react';
import { Container, Typography, Box, } from '@mui/material'
import { GreyDotsLeft, } from '../../Commons/GreyDots'
import Slide from 'react-reveal/Slide';

const OurTeam = () => {
    return <>
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto', }, }}>
            <Typography textAlign="center" sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#1b1b1b" }}>
                Our Team
            </Typography>
            <br /> <br />
            <Box display="flex" flexWrap="wrap" gap="30px" justifyContent="center">
                <Slide bottom>
                    {TeamData.map((item, i) => (
                        <Box sx={{ width: '281px' }}  >
                            {item.img}
                            <Box textAlign="center" sx={{
                                "&:hover": {
                                    transition: '1s',
                                    transform: 'scale(1.1)'
                                },
                                margin: '0 auto 0 auto', padding: '10px', background: "#FFFFFF", boxShadow: "0px 7px 13px rgba(0, 0, 0, 0.05)", maxWidth: '234px'
                            }}>
                                <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: { md: "40px", xs: '20px' }, color: "#1b1b1b" }}>
                                    {item.name}
                                </Typography>
                                <Typography gutterBottom sx={{ fontWeight: "normal", fontSize: { md: "16px", xs: '14px' }, lineHeight: "180%", color: "rgba(27, 27, 27, 0.4)", }}>
                                    {item.speciality}
                                </Typography>
                                <a href={item.linkedinLink}without rel="noreferrer" target="_blank">
                                    <img src={require("../../../Assets/about/ln.png")} alt="" />
                                </a>
                            </Box>
                        </Box>
                    ))}
                </Slide>
            </Box>
            <br />
            <GreyDotsLeft />
            {/* <br /><br />
            <Button size="large" variant="contained" color="primary" sx={{ borderRadius: '94px', padding: 'auto 30px', display: 'block', margin: '0 auto' }}>
                View More
            </Button> */}
        </Container>

    </>;
};

export default OurTeam;

const TeamData = [
    {
        img: <img src={require("../../../Assets/about/Mask Grouppalak.png")} className='team_img' alt="" />,
        name: 'Palak Saboo        ',
        speciality: 'Co-founder & CEO',
        linkedinLink: 'https://www.linkedin.com/in/palak-saboo/        '
    },
    {
        img: <img src={require("../../../Assets/about/Suhani (2) (1).jpg")} className='team_img' alt="" />,
        name: 'Suhani Kumar ',
        speciality: 'Co-founder & COO ',
        linkedinLink: 'https://www.linkedin.com/in/suhani-kumar/        '
    },
    {
        img: <img src={require("../../../Assets/about/parulsaboo.png")} className='team_img' alt="" />,
        name: 'Parul Saboo    ',
        speciality: 'Chief Learning Officer        ',
        linkedinLink: 'https://www.linkedin.com/in/parul-saboo-164629113/        '
    },
    {
        img: <img src={require("../../../Assets/about/Mask Groupumaparvath.png")} className='team_img' alt="" />,
        name: 'Uma Parvathy      ',
        speciality: 'Lead- Student Experience      ',
        linkedinLink: ' https://www.linkedin.com/in/uma-parvathy/        '
    },
    {
        img: <img src={require("../../../Assets/about/Anjali 2.png")} className='team_img' alt="" />,
        name: 'Anjali Mishra       ',
        speciality: 'Lead- Business Operations       ',
        linkedinLink: 'https://www.linkedin.com/in/anjali-m-a8051a9b/        '
    },
    {
        img: <img src={require("../../../Assets/about/Harvi 3.jpg")} className='team_img' alt="" />,
        name: 'Harvi Jain',
        speciality: 'Graphic Designer        ',
        linkedinLink: 'https://www.linkedin.com/in/harvi-jain-83048616b/        '
    },
    
    {
        img: <img src={require("../../../Assets/about/fizanew.png")} className='team_img' alt="" />,
        name: 'Fiza Shakir     ',
        speciality: ' BD Executive      ',
        linkedinLink: 'https://www.linkedin.com/in/fiza-shakir-441991209/        '
    },
    // {
    //     img: <img src={require("../../../Assets/about/WhatsApp Image 2022-02-08 at 4.48 1.png")} className='team_img' alt="" />,
    //     name: 'Debmitra Chatterjee     ',
    //     speciality: ' BD Executive      ',
    //     linkedinLink: '         '
    // },
    {
        img: <img src={require("../../../Assets/about/Anuradha 6.png")} className='team_img' alt="" />,
        name: 'Anuradha        ',
        speciality: ' BD Executive       ',
        linkedinLink: 'https://www.linkedin.com/in/anuradha-shaw-53462417b        '
    },
    {
        img: <img src={require("../../../Assets/about/Prachi Sarin 4.jpeg")} className='team_img' alt="" />,
        name: 'Prachi Sarin        ',
        speciality: 'HR Management',
        linkedinLink: 'https://www.linkedin.com/in/prachi-sarin/        '
    },
    {
        img: <img src={require("../../../Assets/about/Riya Jain 5.png")} className='team_img' alt="" />,
        name: 'Riya Jain      ',
        speciality: 'HR Executive       ',
        linkedinLink: 'https://www.linkedin.com/in/riya-jain-287a1a1aa/        '
    },
    {
        img: <img src={require("../../../Assets/about/shruti.png")} className='team_img' alt="" />,
        name: 'Shruti Gupta',
        speciality: '21st Century Skills Trainer',
        linkedinLink: 'http://linkedin.com/in/shruti-g-aab74212a        '
    },
    // {
    //     img: <img src={require("../../../Assets/about/gurpreet.png")} className='team_img' alt="" />,
    //     name: 'Gurpreet Chawla',
    //     speciality: 'Trainerfounder & COO',
    //     linkedinLink: ''
    // },
    
    // {
    //     img: <img src={require("../../../Assets/about/Sapna Profile.png")} className='team_img' alt="" />,
    //     name: 'Sapna Kanjani',
    //     speciality: '21st Century Skills Trainer',
    //     linkedinLink: ''
    // },
    
    // {
    //     img: <img src={require("../../../Assets/about/Moniza Khan 1.png")} className='team_img' alt="" />,
    //     name: 'Moniza Khan',
    //     speciality: '21st Century Skills Trainer',
    //     linkedinLink: ''
    // },
    // {
    //     img: <img src={require("../../../Assets/about/Shivangi.png")} className='team_img' alt="" />,
    //     name: 'Shivangi Rishi',
    //     speciality: '21st Century Skills Trainer',
    //     linkedinLink: ''
    // },
    // {
    //     img: <img src={require("../../../Assets/about/Shivangi.png")} className='team_img' alt="" />,
    //     name: 'Saijal Swamy',
    //     speciality: '21st Century Skills Trainer',
    //     linkedinLink: ''
    // },
    // {
    //     img: <img src={require("../../../Assets/about/Divya Mahesh.png")} className='team_img' alt="" />,
    //     name: 'Divya Mahesh',
    //     speciality: '21st Century Skills Trainer',
    //     linkedinLink: ''
    // },
    
    // {
    //     img: <img src={require("../../../Assets/about/Ghanishtha Rawlot.png")} className='team_img' alt="" />,
    //     name: 'Ghanishtha Rawlot',
    //     speciality: '21st Century Skills Trainer',
    //     linkedinLink: ''
    // },
    // {
    //     img: <img src={require("../../../Assets/about/Kanika Kapoor 1.png")} className='team_img' alt="" />,
    //     name: 'Kanika Kapoor',
    //     speciality: '21st Century Skills Trainer',
    //     linkedinLink: ''
    // },
   

]