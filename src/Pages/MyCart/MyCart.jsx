import React from 'react';
import { useParams } from 'react-router-dom';

const MyCart = () => {
    const {email} = useParams();
    return (
        <div>
            <h1 className='text-4xl text-center mt-20'>This th3 cart page for email: {email}</h1>
        </div>
    );
};

export default MyCart;