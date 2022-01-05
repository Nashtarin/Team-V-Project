import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AboutMe = () => {

    const { user } = useAuth();
    console.log(user);
    return (
        <div >




            <img className='mt-3' style={{ textAlign: 'start', width: '270px', height: '240px' }} src={user.photoURL} alt="" />

            <p className='text-primary fw-bold'>Name: {user.displayName}</p>
            <p  className='text-primary fw-bold'>Email: {user.email}</p>





        </div>
    );
};

export default AboutMe;