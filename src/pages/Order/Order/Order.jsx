import React, { useEffect, useState } from 'react';
import coverImage from '../../../assets/shop/banner2.jpg'
import Cover from '../../../shared/Cover/Cover';
import { Helmet } from 'react-helmet';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';


const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desserts ', 'drinks']
    const  {category}  = useParams()
    const initialIndex = categories.indexOf(category)
    // console.log(category,'from prams',initialIndex)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    useEffect(() => {
        switch (category) {
            case 'salad':
                setTabIndex(0);
                break;
            case 'pizza':
                setTabIndex(1);
                break;
            case 'soup':
                setTabIndex(2);
                break;
            case 'desserts':
                setTabIndex(3);
                break;
            case 'drinks':
                setTabIndex(4);
                break;

        }
    }, [category])

    const [menu] = useMenu()

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Shop-Order</title>
            </Helmet>
            {/* ----------------------*****************----------------- */}
            <Cover img={coverImage} title={'Our Shop'}></Cover>

            <div className='text-center my-10'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad </Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>

                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;