import React from 'react';
import { BookCardWrapper } from './BookCardWarpper';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
const BookCard = (props) => {
  return (
    <BookCardWrapper color={props.color}>
      <div className="d-flex w-100 justify-content-center  align-items-center">
        <img src={`${props.data.book_image}`} className="w-100" alt="" />
      </div>
      <div>
        <p className="fw-bold  m-0 my-1  text-start pt-2">{props.data.title}</p>
        <p className="fw-bold  m-0 my-1 text-start">
          <span className="text-danger">Price: </span>
          <span className="lineThrough">
            {parseFloat(props.data.price) + 45}$
          </span>
        </p>
        <p className="fw-bold  m-0 my-1 text-start">
          <span className="text-danger ">Sale: </span>
          {parseFloat(props.data.price) + 30}$
        </p>
        <div className="d-flex justify-content-start text-start align-items-center ">
          {(parseInt(props.data.rank) % 5 >= 0 && (
            <FaStar className="me-1 mb-3 text-warning" />
          )) || <FaStar className="me-1 star" />}
          {(parseInt(props.data.rank) % 5 > 1 && (
            <FaStar className="me-1 mb-3 text-warning" />
          )) || <FaStar className="me-1 mb-3 star" />}
          {(parseInt(props.data.rank) % 5 > 2 && (
            <FaStar className="me-1 mb-3 text-warning" />
          )) || <FaStar className="me-1 mb-3 star" />}
          {(parseInt(props.data.rank) % 5 > 3 && (
            <FaStar className="me-1 mb-3 text-warning" />
          )) || <FaStar className="me-1 mb-3 star" />}
          {(parseInt(props.data.rank) % 5 > 4 && (
            <FaStar className="me-1 mb-3 text-warning" />
          )) || <FaStar className="me-1 mb-3 star" />}
        </div>

        <div className="d-flex w-100  align-items-center">
          <Link href={`${props.data.amazon_product_url}`}>
            <a target="_blank" className="btn btn-warning w-100">
              Buy
            </a>
          </Link>
          <Link href={`${props.url}/${props.data.rank}`}>
            <a className="btn btn-secondary ms-5 w-100 ">More</a>
          </Link>
        </div>
      </div>
    </BookCardWrapper>
  );
};

export default BookCard;
