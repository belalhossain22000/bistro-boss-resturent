import React from 'react';
import Banner from '../../Banner/Banner';
import Category from '../Category/Category';
import MenuItems from '../../../shared/MenuItems/MenuItems';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <MenuItems></MenuItems>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;