import React from 'react';
import { Typography, Box, } from '@mui/material'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
const BlogCard = () => {
    return <>
        <Link to="/blog-detail" style={{ textDecoration: 'none' }}>
            <Box sx={{
                width: { md: "387px",xs: '100%' },
                height: "auto",
                paddingBottom: '20px',
                background: "rgba(27, 27, 27, 0.02)",
                borderRadius: "0px 0px 10px 10px",
                margin: '10px 0'
            }}>
                <img src={require("../../../Assets/blogs/Rectangle 146.png")} alt="blogs" className='banner_image' />
                <Box px="20px" paddingTop="20px">
                    <Typography sx={{ fontWeight: "500", fontSize: "25px", lineHeight: "37px", color: "#1B1B1B" }}>
                        What’s your Style of Teaching? (Quiz)
                    </Typography><br />
                    <Typography sx={{ fontWeight: "500", fontSize: "16px", lineHeight: "28px", color: "rgba(27, 27, 27, 0.6)" }}>
                        Professional development goals are crucial for any profession, and teachers are no exception. Here are 11 tips to improve as a teacher.
                    </Typography><br />
                    <Box sx={{ color: "rgba(27, 27, 27, 0.2)", display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <AccessTimeIcon />
                        <Typography sx={{ fontWeight: "500", fontSize: "14px", lineHeight: "28px", color: "rgba(27, 27, 27, 0.2)" }}>
                            January 20, 2022
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Link>
    </>;
};

export default BlogCard;
