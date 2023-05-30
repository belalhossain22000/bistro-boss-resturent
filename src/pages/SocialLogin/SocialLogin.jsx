import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Proider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }
                console.log(savedUser)
                fetch("http://localhost:5000/users", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        
                    })

                    navigate(from,{replace:true})
            })
            .catch(err => {
                console.log(err.message);
            })
    };
    return (
        <div className='w-full text-center my-4'>
            <div className="divider">OR</div>
            <div>
                <button onClick={handleGoogleLogin} className='btn btn-circle btn-outline'>
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;