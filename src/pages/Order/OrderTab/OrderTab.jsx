import React from 'react';
import OrderCard from '../OrderCard/OrderCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3'>
            {
                items.map((item, index) =><OrderCard item={item} key={item._id}></OrderCard>)
            }
        </div>
    );
};

export default OrderTab;