import React from 'react';
import { Container, Typography, Box, } from '@mui/material'
import BlogCard from './BlogCard';
import {BabyPink,GreyDotsRight,GreyDotsLeft } from '../../Commons/GreyDots'
const BlogDetail = () => {
    return <>
        <Box>
            <br />
            <img src={require("../../../Assets/blogs/blogdetailbanner.png")} alt="blogdetailbanner" style={{ width: '100%' }} />
        </Box>
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
        <GreyDotsRight/>
            <Typography position="relative" gutterBottom sx={{ fontWeight: "500", fontSize: "39px", lineHeight: "59px", color: "#1b1b1b" }}>
                Take Back Your Kids’ Education: How to Deal With Learning Loss and Social Regression
                <BabyPink/>
            </Typography>
            <Typography sx={{ fontWeight: "normal", fontSize: "16px", lineHeight: "24px", color: "#F94A5F" }}>
                Students • January 20, 2022
            </Typography>
            <br />
            <Typography gutterBottom sx={{ fontWeight: "normal", fontSize: "20px", lineHeight: "30px", color: " rgba(27, 27, 27, 0.6)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisi porta lacus purus magna elementum viverra sit pulvinar. Sit feugiat ornare ut risus nec vitae mauris, urna tempus. Augue viverra non morbi tristique augue sed in egestas. Lorem sagittis, eget lobortis morbi eget risus tellus. Pharetra ut lacinia vestibulum aliquam ullamcorper tortor. Orci, quis interdum vitae ac amet nunc, tempor. Odio posuere sodales blandit hac quis penatibus enim venenatis. Mi sed aliquam imperdiet cursus.
            </Typography>
            <Typography sx={{ fontWeight: "normal", fontSize: "20px", lineHeight: "30px", color: " rgba(27, 27, 27, 0.6)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisi porta lacus purus magna elementum viverra sit pulvinar. Sit feugiat ornare ut risus nec vitae mauris, urna tempus. Augue viverra non morbi tristique augue sed in egestas.
            </Typography>
            <br /> <br />
            <Typography gutterBottom sx={{ fontWeight: "500", fontSize: "31px", lineHeight: "37px", color: "#1b1b1b" }}>
                Heading one here
            </Typography>
            <Typography sx={{ fontWeight: "normal", fontSize: "20px", lineHeight: "30px", color: " rgba(27, 27, 27, 0.6)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisi porta lacus purus magna elementum viverra sit pulvinar. Sit feugiat ornare ut risus nec vitae mauris, urna tempus. Augue viverra non morbi tristique augue sed in egestas. Lorem sagittis, eget lobortis morbi eget risus tellus. Pharetra ut lacinia vestibulum aliquam ullamcorper tortor. Orci, quis interdum vitae ac amet nunc, tempor. Odio posuere sodales blandit hac quis penatibus enim venenatis. Mi sed aliquam imperdiet cursus.
            </Typography>
            <br /> <br />
            <Typography gutterBottom sx={{ fontWeight: "500", fontSize: "31px", lineHeight: "37px", color: "#1b1b1b" }}>
                Heading two here
            </Typography>
            <Typography sx={{ fontWeight: "normal", fontSize: "20px", lineHeight: "30px", color: " rgba(27, 27, 27, 0.6)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisi porta lacus purus magna elementum viverra sit pulvinar. Sit feugiat ornare ut risus nec vitae mauris, urna tempus. Augue viverra non morbi tristique augue sed in egestas. Lorem sagittis, eget lobortis morbi eget risus tellus. Pharetra ut lacinia vestibulum aliquam ullamcorper tortor. Orci, quis interdum vitae ac amet nunc, tempor. Odio posuere sodales blandit hac quis penatibus enim venenatis. Mi sed aliquam imperdiet cursus.
            </Typography>
            <br />
            <img src={require("../../../Assets/blogs/Mask Group (1).png")} className='banner_image' alt="" />
            <br /><br />
            <Typography sx={{ fontWeight: "normal", fontSize: "20px", lineHeight: "30px", color: " rgba(27, 27, 27, 0.6)" }}>
                <span style={{ fontWeight: 500, fontSize: "48.83px", lineHeight: "53px", color: "#1B1B1B" }}>“</span>    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisi porta lacus purus magna elementum viverra sit pulvinar. Sit feugiat ornare ut risus nec vitae mauris, urna tempus. Augue viverra non morbi tristique augue sed in egestas. Lorem sagittis, eget lobortis morbi eget risus tellus. Pharetra ut lacinia vestibulum aliquam ullamcorper tortor. Orci, quis interdum vitae ac amet nunc, tempor. Odio posuere sodales blandit hac quis penatibus enim venenatis. Mi sed aliquam imperdiet cursus.
            </Typography>
            <br /> <br />
            <Typography gutterBottom sx={{ fontWeight: "500", fontSize: "31px", lineHeight: "37px", color: "#1b1b1b" }}>
                Heading three here
            </Typography>
            <Typography sx={{ fontWeight: "normal", fontSize: "20px", lineHeight: "30px", color: " rgba(27, 27, 27, 0.6)" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisi porta lacus purus magna elementum viverra sit pulvinar. Sit feugiat ornare ut risus nec vitae mauris, urna tempus. Augue viverra non morbi tristique augue sed in egestas. Lorem sagittis, eget lobortis morbi eget risus tellus. Pharetra ut lacinia vestibulum aliquam ullamcorper tortor. Orci, quis interdum vitae ac amet nunc, tempor. Odio posuere sodales blandit hac quis penatibus enim venenatis. Mi sed aliquam imperdiet cursus.
            </Typography>
            <br />
            <Typography sx={{ fontWeight: "normal", fontSize: "20px", lineHeight: "30px", color: " rgba(27, 27, 27, 0.6)" }}>
                <span style={{ fontWeight: 500, fontSize: "48.83px", lineHeight: "53px", color: "#1B1B1B" }}>“</span>    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisi porta lacus purus magna elementum viverra sit pulvinar. Sit feugiat ornare ut risus nec vitae mauris, urna tempus. Augue viverra non morbi tristique augue sed in egestas. Lorem sagittis, eget lobortis morbi eget risus tellus. Pharetra ut lacinia vestibulum aliquam ullamcorper tortor. Orci, quis interdum vitae ac amet nunc, tempor. Odio posuere sodales blandit hac quis penatibus enim venenatis. Mi sed aliquam imperdiet cursus.
            </Typography>
        </Container>
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
            <Typography  gutterBottom sx={{ fontWeight: "500", fontSize: "39px", lineHeight: "59px", color: "#1b1b1b" }}>
                Related Blogs
            </Typography>
            <GreyDotsLeft/>
            <br />
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                {new Array(3).fill("").map((_, i) => (
                    <BlogCard />
                ))}
            </Box>
        </Container>
    </>;
};

export default BlogDetail;
