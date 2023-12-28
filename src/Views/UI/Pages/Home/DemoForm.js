import React from 'react';
import { Container, Grid, Box, TextField, Button, Typography, Alert, CircularProgress } from '@mui/material';
import { GreyDotsRight } from '../../Commons/GreyDots';
import { Link } from 'react-router-dom'
import { useFormik, } from "formik";
import * as Yup from "yup";
import { useBookdemoMutation } from '../../../../Application/Api/BaseQuery';
const DemoForm = () => {
    const digitsOnly = (value) => /^\d+$/.test(value);
    const [addBooking, { isError, isSuccess, isLoading }] = useBookdemoMutation()
    const formik = useFormik({
        initialValues: {
            parentName: "",
            childName: "",
            parentPhoneNumber: "",
            parentEmail: "",
            message: "",
            childAge: "",
            city: "",
            // otp:"234345"
        },
        validationSchema: Yup.object({
            parentName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
            childName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
            parentPhoneNumber: Yup.string()
                .required("Number is required")
                .max(10, "Please enter a valid number")
                .min(10, "Please enter a valid number")
                .matches(/[3-9]\d\d/, "Must be a valid number"),
            parentEmail: Yup.string().email("Invalid email address").required("Required"),
            childAge: Yup.string()
                .test('Digits only', 'The field should have digits only', digitsOnly).required("Required"),
            city: Yup.string().required("Required"),
            message: Yup.string(),
        }),

        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            addBooking(values);
            resetForm({});
        },
    });
    return <div>
        <Container maxWidth="lg" sx={{ margin: { md: '200px auto', xs: '50px auto' } }}>
            <Grid
                container
                spacing={5}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                alignContent="stretch"
                flexWrap="wrap-reverse"
            >
                <Grid item xl="5" md="5" xs="12">
                    <Box sx={{ background: '#227AEB', borderRadius: '20px', padding: '30px' }}>
                        <form onSubmit={formik.handleSubmit}>
                            <Box display="flex" gap="20px"  >
                                <TextField
                                    type="text"
                                    placeholder="Parent’s Name"
                                    sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                    name="parentName"
                                    onChange={formik.handleChange}
                                    value={formik.values.parentName}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.parentName && Boolean(formik.errors.parentName)}
                                    helperText={formik.touched.parentName && formik.errors.parentName}
                                />
                                <TextField
                                    type="text"
                                    placeholder='Child’s Name'
                                    sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                    name="childName"
                                    onChange={formik.handleChange}
                                    value={formik.values.childName}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.childName && Boolean(formik.errors.childName)}
                                    helperText={formik.touched.childName && formik.errors.childName}
                                />
                            </Box>
                            <br />
                            <Box display="flex" gap="20px"  >
                                <TextField
                                    type="text"
                                    placeholder='Parent’s Phone'
                                    sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                    name="parentPhoneNumber"
                                    onChange={formik.handleChange}
                                    value={formik.values.parentPhoneNumber}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.parentPhoneNumber && Boolean(formik.errors.parentPhoneNumber)}
                                    helperText={formik.touched.parentPhoneNumber && formik.errors.parentPhoneNumber}
                                />
                                <TextField
                                    type="email"
                                    placeholder='Parent’s Email'
                                    sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                    name="parentEmail"
                                    onChange={formik.handleChange}
                                    value={formik.values.parentEmail}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.parentEmail && Boolean(formik.errors.parentEmail)}
                                    helperText={formik.touched.parentEmail && formik.errors.parentEmail}
                                />
                            </Box>
                            <br />
                            <Box display="flex" gap="20px"  >

                                <TextField
                                    type="text"
                                    placeholder='Child’s Age'
                                    sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                    name="childAge"
                                    onChange={formik.handleChange}
                                    value={formik.values.childAge}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.childAge && Boolean(formik.errors.childAge)}
                                    helperText={formik.touched.childAge && formik.errors.childAge}
                                />
                                <TextField
                                    type="text"
                                    placeholder='city'
                                    sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                    name="city"
                                    onChange={formik.handleChange}
                                    value={formik.values.city}
                                    onBlur={formik.handleBlur}
                                    error={formik.touched.city && Boolean(formik.errors.city)}
                                    helperText={formik.touched.city && formik.errors.city}
                                />
                            </Box>
                            <br /> 
                            <TextField
                                id=""
                                type="text"
                                placeholder="What are your expectations from this course."
                                multiline
                                rows={8}
                                sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                                name="message"
                                onChange={formik.handleChange}
                                value={formik.values.message}
                            /><br /><br />
                            {isError && (
                                <Alert severity="error">Something went wrong please try again later</Alert>
                            )}
                            {isSuccess && (
                                <Alert severity="success">Thank you for contacting us, our team will get back to you soon.</Alert>
                            )}
                            <br />
                            <Button type="submit" variant="contained" size="large" color="primary" sx={{ padding: '12px 50px', width: '100%' }}>
                                {isLoading ? (<CircularProgress sx={{ color: '#fff' }} />) : ("Book Now")}
                            </Button>
                        </form>
                    </Box>
                </Grid>
                <Grid item xl="6" md="6" xs="12">
                    <GreyDotsRight />
                    <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#1b1b1b" }}>
                        Start your child’s learning journey with Kapable
                    </Typography>
                    <Typography sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1b1b1b" }}>
                        Book a demo in just 1 minute
                    </Typography><br />
                    <div>
                        <Typography gutterBottom sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1b1b1b" }}>
                            1. Fill in your details
                        </Typography>
                        <Typography gutterBottom sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1b1b1b" }}>
                            2. Click on Book Now
                        </Typography>
                        <Typography gutterBottom sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: "#1b1b1b" }}>
                            3. Our team will connect with you shortly
                        </Typography>
                    </div>
                    <br /><br />
                    <Link to="/book-a-demo" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size='large' color="primary" sx={{ borderRadius: '94px' }}>
                            Book Now
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    </div >;
};

export default DemoForm;
