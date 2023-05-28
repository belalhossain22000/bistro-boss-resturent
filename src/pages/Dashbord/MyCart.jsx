import React from 'react';
import useCart from '../../hooks/useCart';
import { FaTrashAlt } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { useEffect } from 'react';

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    useEffect(() => {
        refetch();
    }, [cart, refetch]);
    const handleDeldete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );
                        }
                    });
            }
        });
    };

    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss||Dashboard</title>
            </Helmet>
            <div className='flex items-center justify-center h-[80px] gap-12'>
                <h3 className='uppercase font-semibold text-2xl'>total items {cart.length}</h3>
                <h3 className='uppercase font-semibold text-2xl'>total price ${total}</h3>
                <button className="btn btn-warning btn-sm ">pay</button>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Food</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((cartItem, index) => (
                                <tr key={cartItem._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={cartItem.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{cartItem.name}</td>
                                    <td>{cartItem.price}</td>
                                    <th>
                                        <button onClick={() => handleDeldete(cartItem._id)} className='btn btn-md bg-red-600'>
                                            <FaTrashAlt />
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
