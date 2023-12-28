import React from 'react';
import { Container, Grid, Typography, Box, Button, TextField, CircularProgress, Alert } from '@mui/material'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Slide from 'react-reveal/Slide';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContactMutation } from '../../../../Application/Api/BaseQuery';
const Contact = () => {
    const [addContact, { isError, isSuccess, isLoading }] = useContactMutation()
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            message: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            phoneNumber: Yup.string()
                .required("Number is required")
                .max(10, "Please enter a valid number")
                .min(10, "Please enter a valid number")
                .matches(/[3-9]\d\d/, "Must be a valid number"),
            email: Yup.string().email("Invalid email address").required("Required"),
            message: Yup.string()
        }),

        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            addContact(values);
            resetForm({});
        },
    });
    return <>
        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '100px auto' }, }}>
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
                            Want to connect?
                        </Typography>
                        <Typography sx={{ textShadow: "2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c", fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#F94A5F" }}>
                            Contact Us
                        </Typography>
                        {/* <br />
                        <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: "16px" }, lineHeight: "28px", color: " rgba(27, 27, 27, 0.8)" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt turpis tempus porttitor.
                        </Typography> */}
                    </Slide>
                </Grid>
                <Grid item xl="6" md="6" xs="12"   >
                    <Slide bottom>
                        <img src={require("../../../Assets/contact/yellowbanner.png")} className='banner_image' alt="image_" />
                    </Slide>
                </Grid>
            </Grid>
        </Container>
        <Container maxWidth="lg" sx={{
            margin: { md: '100px auto', xs: '20px auto' }, background: "#FFFFFF",
            boxShadow: "0px 10px 44px rgba(0, 0, 0, 0.05)",
            borderRadius: "20px", padding: '30px 20px'
        }}>
            <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap="wrap"
            >
                <Grid item xl="6" md="6" xs="12"  >
                    <Box sx={{ width: { md: '90%', xs: '100%' }, padding: '30px', background: '#227AEB', borderRadius: '20px' }}>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                id=""
                                type="text"
                                placeholder="First Name"
                                sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                name="firstName"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                onBlur={formik.handleBlur}
                            />
                            <small style={{ color: '#fff' }}>
                                {formik.touched.firstName && formik.errors.firstName ? (
                                    <small>{formik.errors.firstName}</small>) : null}
                            </small>
                            <br /><br />
                            <TextField
                                id=""
                                type="text"
                                placeholder="Last Name"
                                sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                name="lastName"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                onBlur={formik.handleBlur}

                            />
                            <small style={{ color: '#fff' }}>
                                {formik.touched.lastName && formik.errors.lastName ? (
                                    <small>{formik.errors.lastName}</small>) : null}
                            </small>
                            <br /><br />
                            <TextField
                                id=""
                                type="text"
                                placeholder="Phone"
                                sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                name="phoneNumber"
                                onChange={formik.handleChange}
                                value={formik.values.phoneNumber}
                                onBlur={formik.handleBlur}
                            />
                            <small style={{ color: '#fff' }}>
                                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                    <small>{formik.errors.phoneNumber}</small>) : null}
                            </small>
                            <br /><br />
                            <TextField
                                id=""
                                placeholder="Email"
                                sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            <small style={{ color: '#fff' }}>
                                {formik.touched.email && formik.errors.email ? (
                                    <small>{formik.errors.email}</small>) : null}
                            </small>
                            <br /><br />
                            <TextField
                                id=""
                                type="text"
                                placeholder="Message..."
                                multiline
                                rows={8}
                                sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                name="message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                            />
                            <br /><br />
                            {isError && (
                                <Alert severity="error">Something went wrong please try again later</Alert>
                            )}
                            {isSuccess && (
                                <Alert severity="success">Thank you for contacting us, our team will get back to you soon.</Alert>
                            )}
                            <br />
                            <Button type="submit" variant="contained" size="large" color="primary" sx={{ padding: '12px 50px', width: '100%' }}>
                                {isLoading ? (<CircularProgress sx={{ color: '#fff' }} />) : ("Submit")}
                            </Button>
                        </form>
                    </Box>
                </Grid>
                <Grid item xl="6" md="6" xs="12" sx={{ marginTop: { md: '0', xs: '40px' }, padding: { md: '50px', xs: '20px' }, height: 'auto' }}>
                    <Typography sx={{ fontWeight: "500", fontSize: { md: "39px", xs: '25px' }, lineHeight: "59px", color: " #000" }}>
                        Contact Information
                    </Typography>
                    <br />
                    <Box color="#000" display="flex" gap="20px" alignItems="center">
                        <PhoneInTalkIcon />
                        <a href="tel:0123456789" style={{ textDecoration: 'none' }}>
                            <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "59px", color: " #000" }}>
                                +91 70421 12967
                            </Typography>
                        </a>
                    </Box>
                    <br />
                    <Box color="#000" display="flex" gap="20px" alignItems="center">
                        <MarkEmailReadIcon />
                        <a href="mailto:Info@kapable.club" style={{ textDecoration: 'none' }}>
                            <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "59px", color: " #000" }}>
                                info@kapable.club
                            </Typography>
                        </a>
                    </Box>
                    <br />
                    <a target="_blank" rel="noreferrer" href="https://goo.gl/maps/aYQYEWQiZPmH19j49" style={{ textDecoration: 'none' }}>
                        <Box color="#000" display="flex" gap="20px" alignItems="flex-start">
                            <AddLocationAltIcon />
                            <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, color: " #000" }}>
                                316/274 Westend Marg<br />
                                Saket, New Delhi,<br /> Delhi-110038
                            </Typography>
                        </Box>
                    </a>
                    <Box sx={{ marginTop: { md: '60px', xs: '10px' } }}>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/kapable.club">
                            <img src={require("../../../Assets/contact/newsocial (1).png")} alt=""   />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/kapable.club/">
                            <img src={require("../../../Assets/contact/newsocial (2).png")} alt=""   />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/26574261/admin/">
                            <img src={require("../../../Assets/contact/newsocial (3).png")} alt=""   />
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/kapableclub:">
                            <img src={require("../../../Assets/contact/newsocial (4).png")} alt=""   />
                        </a>
                    </Box>
                    <br />
                </Grid>
            </Grid>
        </Container>
    </>;
};

export default Contact;
