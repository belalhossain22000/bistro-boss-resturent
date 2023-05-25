import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../componensts/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';


const Menu = () => {
    const [menu] = useMenu()

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={coverImg} title="our menu"></Cover>
            <SectionTitle subHeading='Dont miss' heading='todays offer'></SectionTitle>
            {/* offerd menu items */}

            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={desserts} title='desserts' img={dessert}></MenuCategory>
            <MenuCategory items={pizza} title='pizza' img={dessert}></MenuCategory>
            <MenuCategory items={salad} title='salad' img={dessert}></MenuCategory>
            <MenuCategory items={soup} title='soup' img={dessert}></MenuCategory>

        </div>
    );
};

export default Menu;