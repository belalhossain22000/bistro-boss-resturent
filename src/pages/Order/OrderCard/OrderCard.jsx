import React from 'react';

const OrderCard = ({item}) => {
    const { name, price, recipe, image } = item || {};
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} />
                <p className='absolute top-0 right-0 mr-14 p-2 bg-gray-800 text-white mt-14'> ${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn border-0 border-b-4 border-orange-600 bg-gray-100  hover:text-white  text-black">Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default OrderCard;