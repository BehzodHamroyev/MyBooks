import React from 'react';
import { FaPaperclip, FaStar } from 'react-icons/fa';
import { BookWrapper } from './BookWrapper';
import Link from 'next/link';
import SwiperBook from '../SwiperBook/SwiperBook'


const Book = ({ data,color }) => {
  return (
    <BookWrapper color={color}>
      <div className="container fw-bold py-5">
        <div className="row m-0 d-flex justify-content-between">
          <div className="col-md-4  mt-4 d-flex justify-content-center align-items-center rounded banerBook">
            <img src={`${data.book_image}`} alt="" className="w-75 " />
          </div>
          <div className="col-md-4 mt-4">
            <p>
              <span className="text-danger ">Title</span>:
              <span> {data.title}</span>
            </p>
            <p>
              <span className="text-danger">Author</span>:   <span> {data.author}</span>
            </p>
            <p>
              <span className="text-danger text-decoration-line-through">
                Price
              </span>
              :  <span className="text-decoration-line-through">{parseInt(data.price) + 45}$</span>
            </p>
            <p>
              <span className="text-danger">Price</span>:
              {parseInt(data.price) + 30}$
            </p>
            <div className="d-flex justify-content-start align-items-center  fs-4 mb-4">
              {(parseInt(data.rank) % 5 >= 0 && (
                <FaStar className="me-1 mb-3 text-warning" />
              )) || <FaStar className="me-1 text-ligdark" />}
              {(parseInt(data.rank) % 5 > 1 && (
                <FaStar className="me-1 mb-3 text-warning" />
              )) || <FaStar className="me-1 mb-3 star" />}
              {(parseInt(data.rank) % 5 > 2 && (
                <FaStar className="me-1 mb-3 text-warning" />
              )) || <FaStar className="me-1 mb-3 star" />}
              {(parseInt(data.rank) % 5 > 3 && (
                <FaStar className="me-1 mb-3 text-warning" />
              )) || <FaStar className="me-1 mb-3 star" />}
              {(parseInt(data.rank) % 5 > 4 && (
                <FaStar className="me-1 mb-3 text-warning" />
              )) || <FaStar className="me-1 mb-3 star" />}
            </div>
            <p className="text-danger">Description</p>
            <p>{data.description}</p>
            <div className="d-flex flex-column">
              {data.buy_links.map((v, i) => {
                return (
                  <Link key={i} href={`${v.url}`}>
                    <a className="d-block py-2" target="_blank">
                      <FaPaperclip />
                      <span>   {v.name}</span>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="col-md-3  mt-4">
            <SwiperBook color={color} />
          </div>
        </div>
      </div>
    </BookWrapper>
  );
};

export default Book;
