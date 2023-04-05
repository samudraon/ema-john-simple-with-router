import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product }) => {
    const {img,id, } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
        </div>
    );
};

export default ReviewItem;