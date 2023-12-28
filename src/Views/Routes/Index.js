import React from 'react'
import Home from '../UI/Pages/Home/Home';
import {
    Routes,
    Route,
    BrowserRouter,
    useLocation
} from "react-router-dom"
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import About from '../UI/Pages/About/About';
import Curriculum from '../UI/Pages/Curriculum/Curriculum';
import Careers from '../UI/Pages/Careers/Careers';
import JobDetail from '../UI/Pages/Careers/JobDetail';
import Contact from '../UI/Pages/ContactUs/Contact';
import DemoForm from '../UI/Pages/DemoForm/DemoForm';
import Blogs from '../UI/Pages/Blogs/Blogs';
import BlogDetail from '../UI/Pages/Blogs/BlogDetail';
import { useLayoutEffect } from 'react'
import PageNotFound from './PageNotFound';
import PrivacyPolicy from '../UI/Pages/Policies/PrivacyPolicy';
import TermsCondition from '../UI/Pages/Policies/TermsCondition';

const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
}
const Index = () => {
    return (
        <div>
            <BrowserRouter>
                <Wrapper>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about-us' element={<About />} />
                        <Route path='/curriculum' element={<Curriculum />} />
                        <Route path='/careers' element={<Careers />} />
                        <Route path='/careers/job-details/:id' element={<JobDetail />} />
                        <Route path='/contact-us' element={<Contact />} />
                        <Route path='/book-a-demo' element={<DemoForm />} />
                        <Route path='/blog' element={<Blogs />} />
                        <Route path='/blog-detail' element={<BlogDetail />} />
                        <Route path='*' element={<PageNotFound />} />
                        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                        <Route path='/terms-conditions' element={<TermsCondition />} />
                    </Routes>
                    <Footer />
                </Wrapper>
            </BrowserRouter>
        </div>
    )
}
export default Index