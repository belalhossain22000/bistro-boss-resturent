import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Proider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const OrderCard = ({ item }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [, refetch] = useCart()

    const { name, price, recipe, image, _id } = item || {};
    const handleAddToCart = (item) => {
        // console.log(item)
        if (user && user?.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                });
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} />
                <p className='absolute top-0 right-0 mr-14 p-2 bg-gray-800 text-white mt-14'> ${price}</p>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div onClick={() => handleAddToCart(item)} className="card-actions">
                    <button className="btn border-0 border-b-4 border-orange-600 bg-gray-100  hover:text-white  text-black">Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default OrderCard;