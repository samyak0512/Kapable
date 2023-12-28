import React from 'react';
import { Container, Typography, Box, Button, TextField, CircularProgress, Alert } from '@mui/material'
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
    return <>
        <Container maxWidth="md" sx={{ margin: { md: '100px auto', xs: '70px auto' }, textAlign: 'center', }}>
            <Typography sx={{ fontWeight: "bold", fontSize: { md: "48px", xs: "31px" }, lineHeight: { md: "70px", xs: '48px' }, color: "#1b1b1b" }}>
                Book your free demo class
            </Typography>
            <br />
            <Typography sx={{ fontWeight: "500", fontSize: { md: "20px", xs: '16px' }, lineHeight: "28px", color: "#1B1B1B" }}>
                To Join the class, you need a laptop/desktop<br /> with webcam and an Internet connection.
            </Typography>
            <br /><br />
            <Box sx={{ padding: { md: '0 70px', xs: '0 20px' } }}>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        type="text"
                        label="Parent’s Name"
                        sx={{ width: '100%', background: ' rgba(27, 27, 27, 0.05)', borderRadius: '5px' }}
                        name="parentName"
                        onChange={formik.handleChange}
                        value={formik.values.parentName}
                        onBlur={formik.handleBlur}
                        error={formik.touched.parentName && Boolean(formik.errors.parentName)}
                        helperText={formik.touched.parentName && formik.errors.parentName}
                    /><br /><br />
                    <TextField
                        type="text"
                        label='Parent’s Phone'
                        sx={{ width: '100%', background: ' rgba(27, 27, 27, 0.05)', borderRadius: '5px' }}
                        name="parentPhoneNumber"
                        onChange={formik.handleChange}
                        value={formik.values.parentPhoneNumber}
                        onBlur={formik.handleBlur}
                        error={formik.touched.parentPhoneNumber && Boolean(formik.errors.parentPhoneNumber)}
                        helperText={formik.touched.parentPhoneNumber && formik.errors.parentPhoneNumber}
                    /><br /><br />
                    <TextField
                        type="email"
                        label='Parent’s Email'
                        sx={{ width: '100%', background: ' rgba(27, 27, 27, 0.05)', borderRadius: '5px' }}
                        name="parentEmail"
                        onChange={formik.handleChange}
                        value={formik.values.parentEmail}
                        onBlur={formik.handleBlur}
                        error={formik.touched.parentEmail && Boolean(formik.errors.parentEmail)}
                        helperText={formik.touched.parentEmail && formik.errors.parentEmail}
                    /><br /><br />
                    <TextField
                        type="text"
                        label='Child’s Name'
                        sx={{ width: '100%', background: ' rgba(27, 27, 27, 0.05)', borderRadius: '5px' }}
                        name="childName"
                        onChange={formik.handleChange}
                        value={formik.values.childName}
                        onBlur={formik.handleBlur}
                        error={formik.touched.childName && Boolean(formik.errors.childName)}
                        helperText={formik.touched.childName && formik.errors.childName}
                    /><br /><br />
                    <TextField
                        type="text"
                        label='Child’s Age'
                        sx={{ width: '100%', background: ' rgba(27, 27, 27, 0.05)', borderRadius: '5px' }}
                        name="childAge"
                        onChange={formik.handleChange}
                        value={formik.values.childAge}
                        onBlur={formik.handleBlur}
                        error={formik.touched.childAge && Boolean(formik.errors.childAge)}
                        helperText={formik.touched.childAge && formik.errors.childAge}
                    /><br /><br />
                    <TextField
                        type="text"
                        label='city'
                        sx={{ width: '100%', background: ' rgba(27, 27, 27, 0.05)', borderRadius: '5px' }}
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        onBlur={formik.handleBlur}
                        error={formik.touched.city && Boolean(formik.errors.city)}
                        helperText={formik.touched.city && formik.errors.city}
                    /><br /><br />
                    <TextField
                        id=""
                        type="text"
                        label="What are your expectations from this course."
                        multiline
                        rows={8}
                        sx={{ width: '100%', background: ' rgba(27, 27, 27, 0.05)', borderRadius: '5px' }}
                        name="message"
                        onChange={formik.handleChange}
                        value={formik.values.message}
                    /><br /><br />
                    {/* <Box textAlign="left">
                        <Typography variant="body1" fontSize="25px" color="initial">
                            OTP Verification
                        </Typography>
                        <Typography gutterBottom variant="body1" fontSize="16px" color="initial">
                            We have sent a verification code to your phone number  +91 9876543210
                        </Typography>
                        <TextField
                            type="text"
                            label='Enter OTP'
                            sx={{ width: '100%', background: ' rgba(27, 27, 27, 0.05)', borderRadius: '5px' }}
                        />
                        <Box display="flex" justifyContent="space-between">
                            <small style={{ color: '#227AEB' }}>00:25</small>
                            <small><a href="/" style={{ color: '#227AEB', textDecoration: 'none' }}>Resend Otp</a></small>
                        </Box>
                        <br /><br />
                    </Box> */}
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
        </Container>
    </>;
};

export default DemoForm;
