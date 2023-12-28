import React from 'react';
import { Box, Typography, Container, Button, TextField, CircularProgress, Alert } from '@mui/material';
import { GreyDotsRight, GreyDotsLeft } from '../../Commons/GreyDots'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useApplicationMutation } from '../../../../Application/Api/BaseQuery'
import { useParams } from "react-router-dom";
import JobData from './db';
const JobDetail = () => {
    const { id } = useParams();
    //expeience regex
    const digitsOnly = (value) => /^\d+$/.test(value);
    const [addApplication, { isError, isSuccess, isLoading }] = useApplicationMutation();
    const [file, setFile] = React.useState();
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            post: "",
            experience: "",
            linkedln: "",
            file: ""
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
            post: Yup.string().required("Required"),
            experience: Yup.string().test('Digits only', 'The field should have digits only', digitsOnly).required("Required"),
            linkedln: Yup.string().matches(/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/,"Enter valid url").required("Required"),
            file: Yup.mixed()
        }),
        
        onSubmit: (values, { resetForm }) => {
            const formData = new FormData();
            Object.keys(values).forEach((value) => {
                formData.append(value, values[value]);
            });
            formData.delete("file");
            formData.append("file", file);
            console.log(formData);
            addApplication(formData);
            // alert(JSON.stringify(values, null, 2));
            resetForm({});
        },
    });
    return < >
        <Box sx={{ margin: '50px 0', background: '#FA4A5F', height: 'auto', padding: '100px 0', display: 'flex', alignItems: 'center' }}>
            <Container maxWidth="lg" sx={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <div>
                    <Typography sx={{ fontWeight: "bold", fontSize: "48px", lineHeight: "75px", color: "#FFFFFF" }}>
                        {JobData[id - 1]["title"]}
                    </Typography>
                    <br />
                    <Typography sx={{ fontWeight: "500", fontSize: "20px", lineHeight: "28px", color: " #FFFFFF" }}>
                        Full-time
                    </Typography>
                    <br />
                    <a href="#form" style={{ textDecoration: 'none' }}>
                        <Button size="large" variant="contained" sx={{ borderRadius: '94px', background: '#fff', color: '#FA4A5F', "&:hover": { background: '#fff', color: '#FA4A5F', } }}>
                            Apply Now
                        </Button>
                    </a>
                </div>

            </Container>
        </Box>

        <Container maxWidth="lg" sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
            <Typography sx={{ fontWeight: "500", fontSize: "31px", lineHeight: "37px", color: "#1B1B1B" }}>
                Responsibilities:
            </Typography>
            <br /><br />
            <Typography gutterBottom sx={{ fontWeight: "normal", fontSize: "20px", lineHeight: "28px", color: "rgba(27, 27, 27, 0.6)" }}>
                {JobData[id - 1]["description"]}
            </Typography>
        </Container>
        <GreyDotsRight />

        <Container id="form" maxWidth="md" sx={{ margin: { md: '100px auto', xs: '50px auto' }, }}>
            <Box sx={{ background: '#227AEB', borderRadius: '20px', padding: { md: '50px', xs: '20px' } }}>
                <Typography sx={{ fontWeight: "500", fontSize: "31px", lineHeight: "37px", color: "#fff" }}>
                    Application Form
                </Typography>
                <br /><br />
                <form onSubmit={formik.handleSubmit}>
                    <Box display="flex" justifyContent="space-between" flexWrap="wrap"  >
                        <TextField
                            id=""
                            type="text"
                            placeholder="First Name"
                            sx={{ width: { md: '48%', xs: '100%' }, background: '#fff', borderRadius: '5px', marginBottom: { md: '0', xs: '20px' } }}
                            name="firstName"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField
                            id=""
                            type="text"
                            placeholder="Last Name"
                            sx={{ width: { md: '48%', xs: '100%' }, background: '#fff', borderRadius: '5px' }}
                            name="lastName"
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.lastName && Boolean(formik.errors.lastName)
                            }
                            helperText={
                                formik.touched.lastName && formik.errors.lastName
                            }
                        />
                    </Box>
                    <br />
                    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                        <TextField
                            id=""
                            type="text"
                            placeholder="Phone"
                            sx={{ width: { md: '48%', xs: '100%' }, background: '#fff', borderRadius: '5px', marginBottom: { md: '0', xs: '20px' } }}
                            name="phoneNumber"
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                        />
                        <TextField
                            id=""
                            placeholder="Email"
                            sx={{ width: { md: '48%', xs: '100%' }, background: '#fff', borderRadius: '5px' }}
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Box>
                    <br />
                    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                        <TextField
                            id=""
                            type="text"
                            placeholder="Post Applied"
                            sx={{ width: { md: '48%', xs: '100%' }, background: '#fff', borderRadius: '5px', marginBottom: { md: '0', xs: '20px' } }}
                            name="post"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.post}
                            error={formik.touched.post && Boolean(formik.errors.post)}
                            helperText={formik.touched.post && formik.errors.post}
                        />
                        <TextField
                            id=""
                            type="text"
                            placeholder="Experience"
                            sx={{ width: { md: '48%', xs: '100%' }, background: '#fff', borderRadius: '5px' }}
                            name="experience"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.experience}
                            error={formik.touched.experience && Boolean(formik.errors.experience)}
                            helperText={formik.touched.experience && formik.errors.experience}
                        />
                    </Box>
                    <GreyDotsLeft />
                    <br />
                    <TextField
                        id=""
                        type="text"
                        placeholder="linkedln Link"
                        sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                        name="linkedln"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.linkedln}
                        error={formik.touched.linkedln && Boolean(formik.errors.linkedln)}
                        helperText={formik.touched.linkedln && formik.errors.linkedln}
                    />
                    <br /><br />
                    <TextField
                        id=""
                        type="file"
                        placeholder="resume"
                        sx={{ width: '100%', background: '#fff', borderRadius: '5px' }}
                        name="file"
                        onChange={(e) => {
                            formik.handleChange(e);
                            setFile(e.target.files[0]);
                        }}
                        value={formik.values.file}
                    />
                    <small style={{ color: '#fff' }}>Resume</small>
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
        </Container>
    </ >;
};

export default JobDetail;
