// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const phone = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const phone = useLoaderData();
    return (
        <div>
            <h2>Phone page</h2>
            <img src={phone.image} alt="" />

        </div>
    );
};

export default phone;